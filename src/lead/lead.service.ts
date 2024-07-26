import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lead } from './lead.entity';
import { LeadResultDto } from './dto/resultDto';
import { error } from 'console';
import { LeadPostDto } from './dto/leadPostDto';
import { LeadDto } from './dto/leadDto';

@Injectable()
export class LeadService {
    //   private datas: LeadeadUsuarioDto[] = [];

    constructor(
        @Inject('LEAD_REPOSITORY')
        private leadRepository: Repository<Lead>,
    ) { }

    async listar(): Promise<Lead[]> {
        return this.leadRepository.find();
    }

    async cadastrar(data: LeadPostDto): Promise<LeadResultDto> {
        this.leadRepository.save(data);

        return <LeadResultDto>{
            status: true,
            mensagem: 'salvou usuario'
        }
    }

    atualizar(data: LeadDto) {
        this.leadRepository.update(data.id, data);
        return <LeadResultDto>{
            status: true,
            mensagem: `Usuario ${data.nome} foi atualizado`
        }
    }

    excluir(id: number) {
        this.leadRepository.delete(id);
        return <LeadResultDto>{
            status: true,
            mensagem: `Usuario excluido com sucesso`
        }
    }


}

