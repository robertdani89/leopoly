import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnagramController } from './anagram.controller';
import { AnagramRepository } from './anagram.repository';
import { AnagramService } from './anagram.service';

@Module({
  imports: [ConfigModule],
  controllers: [AnagramController],
  providers: [AnagramService, AnagramRepository],
  exports: [AnagramService],
})
export class AnagramModule {}
