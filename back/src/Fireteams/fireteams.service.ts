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
  async findOnefireteam(id: number) {
    return this.fireteamRepository.findOne({
      where: { id },
    });
  }
  async updatefireteam(id: number, updateFireteamDto: CreateFireteamDto) {
    const { title } = updateFireteamDto;
    const fireteam = await this.fireteamRepository.findOne({
      where: { id },
    });
    if (!fireteam) {
      throw new NotFoundException('Fireteam not found');
    }
    fireteam.title = title;
    return this.fireteamRepository.save(fireteam);
  }
  async deletefireteam(id: number) {
    const fireteam = await this.fireteamRepository.findOne({
      where: { id },
    });
    if (!fireteam) {
      throw new NotFoundException('Fireteam not found');
    }
    return this.fireteamRepository.remove(fireteam);
  }

  async addPlayerToFireteam(fireteamId: number, playerId: number): Promise<Fireteam> {
    const player = await this.playerRepository.findOne({
      where: { id: playerId },
    });
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    const fireteam = await this.fireteamRepository.findOne({
      where: { id: fireteamId },
      relations: ['players'],
    });
    if (!fireteam) {
      throw new NotFoundException('Fireteam not found');
    }

    // Add player to fireteam's players array
    fireteam.players = [...(fireteam.players || []), player];

    // Save the updated fireteam
    return this.fireteamRepository.save(fireteam);
  }

  // async createOne(fireteam: CreateFireteamDto, playerId: number) {
  //   const player = await this.playerRepository.findOne({where: { id: fireteam },
  //   });

  //   if (!player) {
  //     throw new Error('Player not found');
  //   }
    
  //   const newFireteam = new Fireteam(); // Create a new instance of Fireteam entity
  //   newFireteam.title = CreateFireteamDto.title; // Assign title from DTO
  //   newFireteam.players = [player]; // Wrap player in an array
  
  //   return this.fireteamRepository.save(newFireteam);


    
  // }
  }
  // async removePlayerFromFireteam(fireteamId: number, playerId: number) {
  //   const fireteam = await this.fireteamRepository.findOne({
  //     where: { id: fireteamId },
  //     relations: ['players'],
  //   });
  // }

