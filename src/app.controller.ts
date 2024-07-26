import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersDto } from './users/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('')
  create(@Body() user: UsersDto) {
    return 'foi'
    // this.userService.create(user)
  }
}
