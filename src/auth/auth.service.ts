import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private jwtExpirationSeconds: number;
    constructor(private readonly userservice: UsersService,
        private readonly jwtService:JwtService,
        private readonly configservice:ConfigService
    ){
        this.jwtExpirationSeconds = +this.configservice.get<number>('JWT_EXPIRATION_TIME')
    }
    signIn(name:string,senha:string):AuthResponseDto{
        const foundUser = this.userservice.findByUserName(name)

        if(!foundUser || !bcryptCompareSync(senha,foundUser.senha)){
            throw new UnauthorizedException()
        }
        const payload = { sub: foundUser.id, name:foundUser.name}

        const token = this.jwtService.sign(payload)

        return{token,expiresIn:this.jwtExpirationSeconds}
    }
}

