import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@InputType({ isAbstract: true }) // 직접 쓰이지 않고, 확장의 의미
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
  @Field((type) => Category)
  @ManyToOne((type) => Category, (category) => category.restaurants)
  category: Category;
}
