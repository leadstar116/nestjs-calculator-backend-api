import { Controller, Post, HttpStatus, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CalculateService } from './calculate.service';
import { CalculateDto } from './calculate.dto';

@ApiTags('Calculate')
@Controller()
export class CalculateController {
  private calculateService: CalculateService = CalculateService.getInstance();

  @Post()
  @ApiOperation({ description: 'Run calculatation' })
  public async calculate(@Body() params: CalculateDto, @Res() res: Response) {
    try {
      const result: string = this.calculateService.calculate(params);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error.message);
    }
  }
}
