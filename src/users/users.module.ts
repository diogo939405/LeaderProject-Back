import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';

@Module({
  controllers:[UserController],
  exports:[UsersService],
  providers: [UsersService]
})
export class UsersModule {}
