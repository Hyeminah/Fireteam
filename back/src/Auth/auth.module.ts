import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/Players/players.entity';
import { JwtModule } from '@nestjs/jwt';
import { PlayerService } from 'src/Players/players.service';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [PlayerService, AuthService],
  exports: [PlayerService, AuthService],
})
export class AuthModule { }