import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PlayerService } from '../Players/players.service';

@Injectable()
export class AuthService {
  constructor(
    private playerService: PlayerService,
    private jwtService: JwtService,
  ) {}

  async validatePlayer(mail: string, password: string): Promise<any> {
    const player = await this.playerService.authenticatePlayer(mail, password);
    if (player) {
      return player;
    }
    return null;
  }

  async login(player: any) {
    const payload = { playerId: player.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
