import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('health')
  health (): any {
    return {
      message: 'Petición exitosa de notification.',
      data: [],
      code: 1000
    }
  }
}
