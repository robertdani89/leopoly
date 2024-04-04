import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnagramModule } from './anagram/anagram.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordChainModule } from './word-chain/word-chain.module';

@Module({
  imports: [ConfigModule.forRoot(), AnagramModule, WordChainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
