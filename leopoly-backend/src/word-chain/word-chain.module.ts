import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WordChainController } from './word-chain.controller';
import { WordChainRepository } from './word-chain.repository';
import { WordChainService } from './word-chain.service';

@Module({
  imports: [ConfigModule],
  controllers: [WordChainController],
  providers: [WordChainService, WordChainRepository],
  exports: [WordChainService],
})
export class WordChainModule {}
