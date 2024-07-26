import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { LeadService } from './lead.service';
import { Lead } from './lead.entity';
import { LeadeadUsuarioDto } from './dto/leadDto';
import { LeadResultDto } from './dto/resultDto';

@Controller('lead')
export class LeadController {
    constructor(private readonly leadService: LeadService) { }

    @Get('listar')
    async listar(): Promise<Lead[]> {
        return this.leadService.listar();
    }

    @Post('cadastrar')
    async cadastrar(@Body() data: LeadeadUsuarioDto): Promise<LeadResultDto> {
        return this.leadService.cadastrar(data)
    }

    @Put('atualizar')
    async atualizar(@Body() data: LeadeadUsuarioDto) {
        return this.leadService.atualizar(data)
    }
}

