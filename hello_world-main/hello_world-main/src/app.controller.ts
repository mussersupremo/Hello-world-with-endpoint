import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/helloworld')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bsm')
  getBsm(): string {
    return this.appService.getBsm();
  }

  @Get('/objetivos')
  getObjetivos(): string {
    return this.appService.getObjetivos();
  }

}
