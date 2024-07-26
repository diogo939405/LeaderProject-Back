import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LeadService } from './lead.service';
import { Lead } from './lead.entity';
import { LeadResultDto } from './dto/resultDto';
import { LeadPostDto } from './dto/leadPostDto';
import { LeadDto } from './dto/leadDto';

@Controller('lead')
export class LeadController {
    constructor(private readonly leadService: LeadService) { }

    @Get()
    async listar(): Promise<Lead[]> {
        return this.leadService.listar();
    }

    @Post()
    async cadastrar(@Body() data: LeadPostDto): Promise<LeadResultDto> {
        return this.leadService.cadastrar(data)
    }

    @Put()
    async atualizar(@Body() data: LeadDto) {
        return this.leadService.atualizar(data)
    }
    @Delete('/:id')
    async excluir(@Param('id') id: number) {
        return this.leadService.excluir(id)
    }

}

