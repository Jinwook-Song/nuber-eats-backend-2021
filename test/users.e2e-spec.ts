import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

jest.mock('got', () => {
  return {
    post: jest.fn(),
  };
});

const GRAPHQL_ENDPOINT = '/graphql';

const testUser = {
  email: 'test@account.com',
  password: '121212',
};

describe('UserModule (e2e)', () => {
  let app: INestApplication;
  let jwtToken: string;
  const graphqlRequest = (query: string, jwtToken = '') =>
    request(app.getHttpServer())
      .post(GRAPHQL_ENDPOINT)
      .set('X-JWT', jwtToken)
      .send({ query });

  let usersRepository: Repository<User>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
    await app.init();
  });

  afterAll(async () => {
    // clean test Database
    await getConnection().dropDatabase();
    app.close();
  });

  describe('createAccount', () => {
    it('should create account', () => {
      // send post requests to Graphql endpoint
      return graphqlRequest(
        `
        mutation {
          createAccount(input:{
            email:"${testUser.email}",
            password:"${testUser.password}",
            role:Owner
          }) {
            ok
            error
          }
        }
        `,
      )
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createAccount.ok).toBe(true);
          expect(res.body.data.createAccount.error).toBe(null);
        });
    });

    it('should fail if account already exists', () => {
      return graphqlRequest(
        `
        mutation {
          createAccount(input:{
            email:"${testUser.email}",
            password:"${testUser.password}",
            role:Owner
          }) {
            ok
            error
          }
        }
        `,
      )
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createAccount.ok).toBe(false);
          expect(res.body.data.createAccount.error).toBe(
            'There is a user with that email already',
          );
        });
    });
  });

  describe('login', () => {
    it('should login with correct credentials', () => {
      return graphqlRequest(
        `
        mutation {
          login(input:{
            email:"${testUser.email}",
            password:"${testUser.password}",
          }) {
            ok
            error
            token
          }
        }
        `,
      )
        .expect(200)
        .expect((res) => {
          const {
            body: {
              data: { login },
            },
          } = res;
          expect(login.ok).toBe(true);
          expect(login.error).toBe(null);
          expect(login.token).toEqual(expect.any(String));
          jwtToken = login.token;
        });
    });
    it('should not be able to login with wrong credentials', () => {
      return graphqlRequest(
        `
        mutation {
          login(input:{
            email:"${testUser.email}",
            password:"wrong password",
          }) {
            ok
            error
            token
          }
        }
        `,
      )
        .expect(200)
        .expect((res) => {
          const {
            body: {
              data: { login },
            },
          } = res;
          expect(login.ok).toBe(false);
          expect(login.error).toBe('Wrong password');
          expect(login.token).toEqual(null);
        });
    });
  });

  describe('userProfile', () => {
    let userId: number;
    beforeAll(async () => {
      const [user] = await usersRepository.find();
      userId = user.id;
    });
    it("should see a user's profile", () => {
      return graphqlRequest(
        `
        {
          userProfile(userId:${userId}){
            ok
            error
            user {
              id
              email
            }
          }
        }
        `,
        jwtToken,
      )
        .expect(200)
        .expect((res) => {
          const {
            body: {
              data: {
                userProfile: {
                  ok,
                  error,
                  user: { id, email },
                },
              },
            },
          } = res;
          expect(ok).toBe(true);
          expect(error).toBe(null);
          expect(id).toBe(userId);
          expect(email).toBe(testUser.email);
        });
    });
    it('should not find a profile', () => {
      return graphqlRequest(
        `
        {
          userProfile(userId:100){
            ok
            error
            user {
              id
              email
            }
          }
        }
        `,
        jwtToken,
      )
        .expect(200)
        .expect((res) => {
          const {
            body: {
              data: {
                userProfile: { ok, error, user },
              },
            },
          } = res;
          expect(ok).toBe(false);
          expect(error).toBe('User Not Found');
          expect(user).toBe(null);
        });
    });
  });

  describe('myProfile', () => {
    it('should find my profile', () => {
      return graphqlRequest(
        `
        {
          myProfile {
            email
          }
        }
        `,
        jwtToken,
      )
        .expect(200)
        .expect((res) => {
          const {
            body: {
              data: {
                myProfile: { email },
              },
            },
          } = res;
          expect(email).toBe(testUser.email);
        });
    });
    it('should not allow logged out user', () => {
      return graphqlRequest(
        `
        {
          myProfile {
            email
          }
        }
        `,
      )
        .expect(200)
        .expect((res) => {
          const {
            body: { errors },
          } = res;
          expect(errors[0]['message']).toBe('Forbidden resource');
        });
    });
  });
  it.todo('verifyEmail');
  it.todo('editProfile');
});
