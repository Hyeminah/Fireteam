import { Controller, Get, Post, Body, HttpStatus, Res, NotFoundException, UseGuards } from '@nestjs/common';
import { FireteamService } from './fireteams.service';
import { CreateFireteamDto } from './fireteams.dto';
import { AuthModule } from 'src/Auth/auth.module';

@Controller()
export class FireteamController {
  constructor(private readonly fireteamService: FireteamService) {}

  @Post('/creationFireteam')
  @UseGuards(AuthModule)
  async createFireteam(@Body() createFireteamDto: CreateFireteamDto) {
    return this.fireteamService.createFireteam(createFireteamDto);
  }

//   @Get()
//   async findAll(): Promise<Fireteam[]> {
//     return await this.fireteamService.findAll();
//   }
 }
