import {Controller,Get,Post,Body,HttpStatus,UseGuards,Req,Param,HttpCode,} from '@nestjs/common';
import { FireteamService } from './fireteams.service';
import { CreateFireteamDto } from './fireteams.dto';
import { AuthModule } from 'src/Auth/auth.module';

@Controller()
export class FireteamController {
  constructor(private readonly fireteamService: FireteamService) {}

  @Post('/creationFireteam')
  @UseGuards(AuthModule)
  async createFireteam(
    @Body() createFireteamDto: CreateFireteamDto,
    @Req() req: any,
  ) {
    return this.fireteamService.createFireteam(
      createFireteamDto,
      req.player_id,
    );
  }
  @Get('/fireteam')
  async findAllFireteams() {
    return this.fireteamService.findAllfireteam();
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthModule)
  @Post('/fireteam/:id/join')
  async addPlayerToFireteam(
    @Req() req: any,
    @Param('id') id: number,
  ) {
    return this.fireteamService.addPlayerToFireteam(id, req.player_id);
  }
}