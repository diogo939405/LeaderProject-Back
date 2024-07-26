import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    JwtModule.registerAsync({
    global:true,
    imports:[],
    useFactory:async(configService:ConfigService)=>({
      secret:configService.get<string>('JWT_SECRET'),
      signOptions:{expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME')}
    }),
inject:[ConfigService]
  }),UsersModule],
  providers: [AuthService],
  controllers:[authController]
})
export class AuthModule {}
