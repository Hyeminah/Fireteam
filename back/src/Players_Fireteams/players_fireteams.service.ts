import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerFireteam } from './players_fireteams.entity';
import { CreatePlayerFireteamDto } from './players_fireteams.dto';
import { Repository } from 'typeorm';
import { Player } from 'src/Players/players.entity';
import { Fireteam } from 'src/Fireteams/fireteams.entity';
import { CreatePlayerDto } from 'src/Players/players.dto';


@Injectable()
export class PlayerFireteamService { 
  constructor(
    @InjectRepository(PlayerFireteam)
    private readonly playerFireteamRepository: Repository<PlayerFireteam>,
    private readonly playerRepository: Repository<Player>,
    private readonly fireteamRepository: Repository<Fireteam>
  ) {}



//   async findAllFireteams(): Promise<PlayerFireteam[]> {
//     return this.playerFireteamRepository.find();
//   }

//   async findPlayerFireteam(playerId: number, fireteamId: number ): Promise<PlayerFireteam | null> {
//     return this.playerFireteamRepository.findOne({ where: { playerId , fireteamId}})
// }

// async deleteFireteamByCreator(playerId: number, fireteamId:number): Promise<void> {
//     const playerFireteam = await this.playerFireteamService.findPlayerFireteam(playerId, fireteamId);
//     if (!playerFireteam) {
//       throw new NotFoundException('Player is not a member of this fireteam.');
//     }
// }
// // async updateFireteamByTitle(title: string, updateData: Partial<CreateFireteamDto>): Promise<Fireteam> {
//   //   const fireteam = await this.fireteamRepository.findOne({ where: { title } });
//   //   if (!fireteam) {
//   //     throw new NotFoundException(`Fireteam with title '${title}' not found`);
//   //   }
//   //   Object.assign(fireteam, updateData);
//   //   return this.fireteamRepository.save(fireteam);
  
//   // }
  
//   //   const fireteam = await this.fireteamRepository.findOne({ where: { title : title} });
//   //   if (!fireteam) {
//   //     throw new NotFoundException('Fireteam not found.');
//   //   }

//   //   await this.fireteamRepository.remove(fireteam);
//   // }
 

//   // async findFireteamByTitle(title: string): Promise<Fireteam> {
//   //   return this.fireteamRepository.findOne({ where: { title } });
//   //   }
}

