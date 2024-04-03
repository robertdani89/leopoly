import { Module } from '@nestjs/common';
import { BackendAnagrammaController } from './backend-anagramma.controller';
import { BackendAnagrammaService } from './backend-anagramma.service';

@Module({
  controllers: [BackendAnagrammaController],
  providers: [BackendAnagrammaService],
  exports: [BackendAnagrammaService],
})
export class BackendAnagrammaModule {}
