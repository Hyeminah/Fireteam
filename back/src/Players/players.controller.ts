import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { CreatePlayerDto } from './players.dto';
import { PlayerService } from './players.service';
import { AuthService } from 'src/Auth/auth.service';

@Controller()
export class PlayerController {
  constructor(
    private readonly playersService: PlayerService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  @HttpCode(201)
  async createPlayer(@Body() CreatePlayerDto: CreatePlayerDto) {
    try {
      await this.playersService.createPlayer(CreatePlayerDto);
      return { message: 'Account created successfully' };
    } 
    catch (error) {
    throw new BadRequestException('An error occurred while creating the account');
  
      }
    }
  @Post('/login')
  @HttpCode(201)
  async loginPlayer(
    @Body() loginCredentials: { mail: string; password: string },
  ) {try {
    const { accessToken } = await this.authService.login(loginCredentials.mail, loginCredentials.password);
    return {message:'Logged in successfully', accessToken };
} catch (error) {
  throw new BadRequestException('An error occurred while connecting');
    }
}
  }

