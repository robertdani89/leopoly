import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class AnagramRequestDTO {
  @ApiProperty({
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5,
    example: 'tárol',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5, 5)
  word!: string;
}
