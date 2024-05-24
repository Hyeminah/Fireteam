import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PlayerService } from '../Players/players.service';

@Injectable()
export class AuthService {
  constructor(
    private playerService: PlayerService,
    private jwtService: JwtService,
  ) {}

  async validatePlayer(mail: string, password: string): Promise<any> {
    const player = await this.playerService.login(mail, password);
    if (player) {
      return player;
    }
    return null;
  }

  async login(mail: string, password: string): Promise<{ message: string; accessToken: string }> {
    const player = await this.playerService.login(mail, password);
    if (!player) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { playerId: player.id };
    const accessToken = this.jwtService.sign(payload);
    return { message: 'You are logged in!', accessToken };
  }
}
