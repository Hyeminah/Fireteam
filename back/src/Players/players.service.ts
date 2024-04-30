import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import * as bcrypt from 'bcrypt';
import { CreatePlayerDto } from './players.dto';



@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    //const { id,pseudo, mail, password } = createPlayerDto;
    const hashedPassword = await bcrypt.hash(createPlayerDto.password, 10);
    const newPlayer = new Player()
    newPlayer.pseudo = createPlayerDto.pseudo,
    newPlayer.mail = createPlayerDto.mail,
    newPlayer.password = hashedPassword
    
    return this.playerRepository.save(newPlayer);
  }
  async loginPlayer(createPlayerDto: CreatePlayerDto){
    const player = await this.playerRepository.findOne ({
      where: {
        mail: createPlayerDto.mail,
        password: createPlayerDto.password
      }
    })
    if (!player) {
      throw new NotFoundException('Player not found');
    
  }
  }

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

}