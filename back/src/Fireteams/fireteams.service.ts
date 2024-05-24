import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fireteam } from './fireteams.entity';
import { CreateFireteamDto } from './fireteams.dto';
import { Player } from 'src/Players/players.entity';

@Injectable()
export class FireteamService {
  constructor(
    @InjectRepository(Fireteam)
    private readonly fireteamRepository: Repository<Fireteam>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  create(createFireteamDto: CreateFireteamDto): Fireteam | Promise<Fireteam> {
    throw new Error('Method not implemented.');
  }

  async createFireteam(
    createFireteamDto: CreateFireteamDto,
    player_id: number,
  ): Promise<Fireteam> {
    const { title } = createFireteamDto;
    const player = await this.playerRepository.findOne({
      where: { id: player_id },
    });
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    const fireteam = this.fireteamRepository.create({
      title,
      players: [player],
    });
    return this.fireteamRepository.save(fireteam);
  }
  async findAllfireteam() {
    return this.fireteamRepository.find();
  }
  async addPlayerToFireteam(
    fireteamId: number,
    playerId: number,
  ) {
    const fireteam = await this.fireteamRepository.findOne({
      where: { id: fireteamId },
      relations: ['players'],
    });
    if (!fireteam) {
      throw new NotFoundException('Fireteam not found');
    }
    const player = await this.playerRepository.findOne({
      where: { id: playerId },
    });
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    fireteam.players = [...(fireteam.players || []), player];
    return this.fireteamRepository.save(fireteam);
  }
  async removePlayerFromFireteam(
    fireteamId: number,
    playerId: number,
    ) {
      const fireteam = await this.fireteamRepository.findOne({
        where: { id: fireteamId },
        relations: ['players'],
 
     });
}
}
