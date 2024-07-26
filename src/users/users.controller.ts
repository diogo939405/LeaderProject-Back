import { Body, Controller,Post } from "@nestjs/common";
import { UsersDto } from "./users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController{
    constructor (private readonly userService:UsersService){ }

    @Post('')
    create(@Body()user: UsersDto){
        this.userService.create(user)
    }
}