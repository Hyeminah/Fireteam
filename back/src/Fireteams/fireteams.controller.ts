import { Controller, Get, Post, Body, HttpStatus, Res, NotFoundException, UseGuards,Req, Param } from '@nestjs/common';
import { FireteamService } from './fireteams.service';
import { CreateFireteamDto } from './fireteams.dto';
import { AuthModule } from 'src/Auth/auth.module';
import { Fireteam } from './fireteams.entity';

@Controller()
export class FireteamController {
  constructor(private readonly fireteamService: FireteamService) {}

  @Post('/creationFireteam')
  @UseGuards(AuthModule)
  async createFireteam(@Body() createFireteamDto: CreateFireteamDto, @Req() req:any) {
    return this.fireteamService.createFireteam(createFireteamDto, req.player_id);
    
  }
  @Get('/fireteam')
  async findAllFireteams() {
    return this.fireteamService.findAllfireteam();
    
  }
  @Post('/fireteam')
  addPlayerToFireteam(
    @Param('fireteamId') fireteamId: number,
    @Body('playerId') playerId: number,
  ) {
    return this.fireteamService.addPlayerToFireteam(fireteamId, playerId);
  }
 }
