import { Controller } from '@nestjs/common';
import { BackendWordChainService } from './backend-word-chain.service';

@Controller('backend-word-chain')
export class BackendWordChainController {
  constructor(private backendWordChainService: BackendWordChainService) {}
}
