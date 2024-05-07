import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import * as bcrypt from 'bcrypt';
import { CreatePlayerDto } from './players.dto';
import jwt from 'jsonwebtoken';



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
  async authenticatePlayer(mail: string, password: string): Promise<string | null> {
    const player = await this.playerRepository.findOne({ where: { mail: mail } }) ;
    
    if (player && await bcrypt.compare(password, player.password)) {
      const token = jwt.sign({ playerId: player.id }, 'your_secret_key_here', { expiresIn: '1h' });
        return token;
    }
    
    return null; // Return null if authentication fails
}

    // if (!player) {
    //   throw new NotFoundException('Player not found');
    
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

