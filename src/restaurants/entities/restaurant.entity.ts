import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Category } from './category.entity';

@InputType('RestaurantInputType', { isAbstract: true }) // 직접 쓰이지 않고, 확장의 의미
@ObjectType() // for graphQL
@Entity() // for TypeORM
export class Restaurant extends CoreEntity {
  @Field((type) => String) // for graphQL
  @Column() // for TypeORM
  @IsString() // for validation
  @Length(5) // for validation
  name: string;

  @Field((type) => String)
  @Column()
  @IsString()
  coverImg: string;

  @Field((type) => String, { defaultValue: '강남' })
  @Column()
  @IsString()
  address: string;

  // restaurant can have only one category
  // nullable: true => category를 지워도 restaurant를 지우면 안됌
  @Field((type) => Category, { nullable: true })
  @ManyToOne(
    //
    (type) => Category,
    (category) => category.restaurants,
    { nullable: true, onDelete: 'SET NULL' },
  )
  category: Category;

  @Field((type) => User)
  @ManyToOne(
    //
    (type) => User,
    (user) => user.restaurants,
    { onDelete: 'CASCADE' },
  )
  owner: User;

  @RelationId((restaurant: Restaurant) => restaurant.owner)
  ownerId: number;
}
