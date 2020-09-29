import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CalculateDto {
  @ApiPropertyOptional({
    name: 'next',
    description: 'next value',
  })
  next: string

  @ApiPropertyOptional({
    name: 'total',
    description: 'total value',
  })
  total: string

  @ApiProperty({
    name: 'operation',
    description: 'operation',
  })
  operation: string
}
