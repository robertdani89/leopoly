import { Controller } from '@nestjs/common';
import { BackendAnagrammaService } from './backend-anagramma.service';

@Controller('backend-anagramma')
export class BackendAnagrammaController {
  constructor(private backendAnagrammaService: BackendAnagrammaService) {}
}
