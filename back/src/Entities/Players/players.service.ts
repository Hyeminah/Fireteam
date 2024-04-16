import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import { CreatePlayerDto } from './players.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { id,pseudo, mail, password } = createPlayerDto;
    const player = this.playerRepository.create({id, pseudo, mail, password });
    return this.playerRepository.save(player);
  }

  // async findOne(id: number): Promise<Player> {
  //     const player = await this.playerRepository.findOne(id); // Correct usage
  //     if (!player) {
  //       throw new NotFoundException(`Player with ID ${id} not found`);
  //     }
  //     return player;
  //   }
  }

  // async findAll(): Promise<Player[]> {
  //   return this.playerRepository.find();
  // }

  
  

//   async update(id: number, updatePlayerDto: CreatePlayerDto): Promise<Player> {
//     const player = await this.findOne(id);
//     // Update the properties of the player
//     player.pseudo = updatePlayerDto.pseudo;
//     player.email = updatePlayerDto.email;
//     player.password = updatePlayerDto.password;
//     // Update other properties as needed
//     return this.playerRepository.save(player);
//   }

//   async remove(id: number): Promise<void> {
//     const player = await this.findOne(id);
//     await this.playerRepository.remove(player);
//   }

// }