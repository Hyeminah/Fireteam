import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './players.dto';
import { PlayerService } from './players.service';
import { Player } from './players.entity';

@Controller()
export class PlayerController {
  constructor(private readonly playersService: PlayerService) {}

  @Post('/register')
  async createPlayer(@Body() CreatePlayerDto: CreatePlayerDto) {
    console.log(CreatePlayerDto);
    return this.playersService.createPlayer(CreatePlayerDto);
  }
  @Post('/login')
  async loginPlayer(
    @Body() loginCredentials: { mail: string; password: string },
  ) {
    const { mail, password } = loginCredentials;

    const authenticatedPlayer = await this.playersService.authenticatePlayer(
      mail,
      password,
    );
    if (authenticatedPlayer !== null) {
      return {
        message: 'Authentication successful',
        player: authenticatedPlayer,
      };
    } else {
      // Authentication failed
      return { message: 'Authentication failed' };
    }
  }
}
