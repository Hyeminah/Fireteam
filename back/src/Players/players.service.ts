import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './players.entity';
import * as bcrypt from 'bcrypt';
import { CreatePlayerDto } from './players.dto';
import { JwtService } from '@nestjs/jwt';
import { FindOneOptions } from 'typeorm';


@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    private readonly jwtService: JwtService,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    const hashedPassword = await bcrypt.hash(createPlayerDto.password, 10);
    const newPlayer = new Player();
    newPlayer.pseudo = createPlayerDto.pseudo;
    newPlayer.mail = createPlayerDto.mail;
    newPlayer.password = hashedPassword;

    return this.playerRepository.save(newPlayer);
  }

  async authenticatePlayer(mail: string, password: string): Promise<any> {
    const player = await this.playerRepository.findOne({ where: { mail: mail } });

    if (player && await bcrypt.compare(password, player.password)) {
      return player; // Return player if authentication is successful
    }

    return null; // Return null if authentication fails
  }

  async login(player: any) {
    const payload = { playerId: player.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
  
  // async updatePlayer(playerId: number, updatePlayerDto: CreatePlayerDto): Promise<Player | null> {
  //   const player = await this.playerRepository.findOne(playerId);

  //   if (!player) {
  //       return null; // Player not found
  //   }

  //   if (updatePlayerDto.pseudo) {
  //       player.pseudo = updatePlayerDto.pseudo;
  //   }
  //   if (updatePlayerDto.mail) {
  //       player.mail = updatePlayerDto.mail;
  //   }
  //   if (updatePlayerDto.password) {
  //       const hashedPassword = await bcrypt.hash(updatePlayerDto.password, 10);
  //       player.password = hashedPassword;
  //   }

  //   // Save the updated player to the database
  //   await this.playerRepository.save(player);

  //   return player;


  // if (!player) {
  //   throw new NotFoundException('Player not found');
// }

//   async remove(id: number): Promise<void> {
//     const player = await this.findOne(id);
//     await this.playerRepository.remove(player);
//   }
