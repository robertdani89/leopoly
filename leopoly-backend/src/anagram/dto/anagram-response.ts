import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class AnagramResponseDTO {
  @ApiProperty({
    required: true,
    type: Array,
  })
  @IsNotEmpty()
  @IsArray()
  findings!: string[];
}
