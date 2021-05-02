import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

// @ inputType => object로 한번에 input을 다룸
// @ ArgsType

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
