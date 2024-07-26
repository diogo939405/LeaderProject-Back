import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lead } from './lead.entity';
import { LeadeadUsuarioDto } from './dto/leadDto';
import { LeadResultDto } from './dto/resultDto';
import { error } from 'console';

@Injectable()
export class LeadService {
    private datas: LeadeadUsuarioDto[] = [];

    constructor(
        @Inject('LEAD_REPOSITORY')
        private leadRepository: Repository<Lead>,
    ) { }

    async listar(): Promise<Lead[]> {
        return this.leadRepository.find();
    }

    async cadastrar(data: LeadeadUsuarioDto): Promise<LeadResultDto> {
        let leadUsuario = new Lead()
        leadUsuario.id = data.id
        leadUsuario.nome = data.nome
        leadUsuario.email = data.email
        leadUsuario.nascimento = data.nascimento
        leadUsuario.telefone = data.telefone
        return this.leadRepository.save(leadUsuario)
            .then((result) => {
                return <LeadResultDto>{
                    status: true,
                    mensagem: 'salvou usuario'
                }
            })
            .catch((error) => {
                return <LeadResultDto>{
                    status: false,
                    mensagem: 'erro ao salvar'
                }
            })
    }

    atualizar(data: LeadeadUsuarioDto) {
        let dataIndex = this.leadRepository.findOneBy();
        // this.datas.findIndex(t => t.id === data.id)
        try {
            console.log('entrou', dataIndex, data)
            if (dataIndex >= 0) {
                this.datas[dataIndex] = { ...this.datas[dataIndex], ...data };
                return
            }
        } catch (error) {
            throw new HttpException(`taskId n foi achado ${error}`, HttpStatus.BAD_REQUEST);
        }


    }
}

