import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnagramModule } from './anagram/anagram.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), AnagramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
