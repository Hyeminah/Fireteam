import {
  Body,
  Controller,
  HttpCode,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { CreatePlayerDto } from './players.dto';
import { PlayerService } from './players.service';

@Controller()
export class PlayerController {
  constructor(
    private readonly playersService: PlayerService,
  ) {}

  @Post('/register')
  @HttpCode(201)
  async createPlayer(@Body() CreatePlayerDto: CreatePlayerDto) {
    try {
      await this.playersService.createPlayer(CreatePlayerDto);
      return { message: 'Account created successfully' };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new BadRequestException(
          'An error occurred while creating the account',
        );
      }
    }
  }
  @Post('/login')
  @HttpCode(201)
  async loginPlayer(
    @Body() loginCredentials: { mail: string; password: string; pseudo:string },
  ) {try {
    const { access_token } = await this.playersService.login(CreatePlayerDto);
    return { accessToken: access_token };
} catch (error) {
    if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
    } else {
        throw new BadRequestException('An error occurred while connecting');
    }

    
  // @Post('/protected-route')
  // @UseGuards(JwtAuthGuard)
  // protectedRoute(@Request() req) {
  //   return { message: 'You have accessed a protected route', player: req.user };
  // }
}
  }
}
