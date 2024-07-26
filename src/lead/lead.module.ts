import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { leadProviders } from './lead.providers';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [LeadController],
    providers: [
        ...leadProviders,
        LeadService,
    ],
})
export class LeadModule { }