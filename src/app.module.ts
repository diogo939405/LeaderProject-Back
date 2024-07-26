import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LeadController } from './lead/lead.controller';
import { LeadModule } from './lead/lead.module';
import { LeadService } from './lead/lead.service';
import { leadProviders } from './lead/lead.providers';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LeadModule],
  controllers: [AppController, LeadController],
  providers: [...leadProviders, ...databaseProviders, AppService, LeadService],
})
export class AppModule { }
