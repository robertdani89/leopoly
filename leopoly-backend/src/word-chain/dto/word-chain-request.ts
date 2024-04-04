import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class WordChainRequestDTO {
  @ApiProperty({
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5,
    example: 'nyerő',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5, 5)
  source!: string;

  @ApiProperty({
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5,
    example: 'gyári',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5, 5)
  target!: string;
}
