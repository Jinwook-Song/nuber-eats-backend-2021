import { Global, Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PUP_SUB } from './common.constants';

const pubsub = new PubSub();

@Global()
@Module({
  providers: [{ provide: PUP_SUB, useValue: pubsub }],
  exports: [PUP_SUB],
})
export class CommonModule {}
