import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => Boolean)
  isPizzaGood(): boolean {
    return true;
  }
}
