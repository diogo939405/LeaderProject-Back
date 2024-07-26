import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as  bcryptHashSync } from 'bcrypt';
@Injectable()
export class UsersService {
    private readonly users:UsersDto[]=[
        {
            id:'1',
            name:'diogo',
            senha:'12345'
        }
    ]
    create(NewUser:UsersDto){
        NewUser.id =uuid()
        NewUser.senha= bcryptHashSync(NewUser.senha,10)
        this.users.push(NewUser)
        console.log(this.users)
    }

    findByUserName(name:string):UsersDto | null{
        return this.users.find(users=>users.name === name)
    }
}
