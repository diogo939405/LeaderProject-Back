import { Body, Controller,Post } from "@nestjs/common";
import { AuthResponseDto } from "./auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class authController{
    constructor(private readonly authservice: AuthService){}
    @Post('login')
    singIn(
        @Body('name')name:string,
        @Body('senha') senha:string
    ):AuthResponseDto{
        return this.authservice.signIn(name,senha)
    }
}