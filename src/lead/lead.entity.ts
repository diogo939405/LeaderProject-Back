import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lead {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column({ length: 100 })
    sobrenome: string;

    @Column({ length: 100 })
    email: string;

    @Column({})
    telefone: number;

    @Column({})
    nascimento: number;
}