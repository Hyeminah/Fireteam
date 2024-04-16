import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerFireteam } from './players_fireteams.entity';
import { CreatePlayerFireteamDto } from './players_fireteams.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerFireteamService {
  constructor(
    @InjectRepository(PlayerFireteam)
    private readonly playerFireteamRepository: Repository<PlayerFireteam>,
  ) {}

  async createPlayerFireteam(createPlayerFireteamDto: CreatePlayerFireteamDto,): Promise<PlayerFireteam> {
    const {playerId,startTime, endTime } = createPlayerFireteamDto;
    const playerFireteam = this.playerFireteamRepository.create({ playerId ,startTime, endTime});
    return this.playerFireteamRepository.save(playerFireteam);
  }
}
