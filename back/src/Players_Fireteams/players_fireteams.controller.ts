import { Controller, Post, Body, Get } from '@nestjs/common';
import { PlayerFireteamService} from './players_fireteams.service';
import { CreatePlayerFireteamDto } from './players_fireteams.dto';
import { PlayerFireteam } from './players_fireteams.entity';
import { Fireteam } from 'src/Fireteams/fireteams.entity';
// import { FireteamService } from 'src/fireteams/fireteams.service';
@Controller()

export class PlayerFireteamController {
  constructor(private readonly playerFireteamService: PlayerFireteamService) {}

 
}
