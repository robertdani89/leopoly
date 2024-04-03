import { Module } from '@nestjs/common';
import { BackendWordChainController } from './backend-word-chain.controller';
import { BackendWordChainService } from './backend-word-chain.service';

@Module({
  controllers: [BackendWordChainController],
  providers: [BackendWordChainService],
  exports: [BackendWordChainService],
})
export class BackendWordChainModule {}
