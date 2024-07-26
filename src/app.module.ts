import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { UserController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { LeadController } from './lead/lead.controller';
import { LeadModule } from './lead/lead.module';
import { LeadService } from './lead/lead.service';
import { leadProviders } from './lead/lead.providers';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TaskModule, UsersModule, AuthModule, LeadModule],
  controllers: [AppController, UserController, LeadController],
  providers: [...leadProviders, ...databaseProviders, AppService, UsersService, LeadService],
})
export class AppModule { }
