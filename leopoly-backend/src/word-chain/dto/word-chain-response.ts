import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class WordChainResponseDTO {
  @ApiProperty({
    required: true,
    type: Array,
  })
  @IsNotEmpty()
  @IsArray()
  chain!: string[];
}
