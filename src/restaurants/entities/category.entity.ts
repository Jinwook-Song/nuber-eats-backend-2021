import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@InputType('CategoryInputType', { isAbstract: true }) // 직접 쓰이지 않고, 확장의 의미
@ObjectType() // for graphQL
@Entity() // for TypeORM
export class Category extends CoreEntity {
  @Field((type) => String) // for graphQL
  @Column({ unique: true }) // for TypeORM
  @IsString() // for validation
  @Length(5) // for validation
  name: string;

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  @IsString()
  coverImg: string;

  @Field((type) => String)
  @Column({ unique: true })
  @IsString()
  slug: string;

  // category can have many restaurants
  @Field((type) => [Restaurant], { nullable: true })
  @OneToMany((type) => Restaurant, (restaurant) => restaurant.category)
  restaurants: Restaurant[];
}
