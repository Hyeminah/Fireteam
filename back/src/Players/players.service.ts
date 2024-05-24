import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const hashedPassword = await bcrypt.hash(createPlayerDto.password, 10);
    const newPlayer = new Player();
    newPlayer.pseudo = createPlayerDto.pseudo;
    newPlayer.mail = createPlayerDto.mail;
    newPlayer.password = hashedPassword;

    return this.playerRepository.save(newPlayer);
  }

  async login(mail: string, password: string): Promise<Player> {
    const player = await this.playerRepository.findOne({ where: { mail } });

    if (!player) {
      throw new UnauthorizedException('Incorrect email or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, player.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect email or password.');
    }

    return player; // Return the player object
  }
 catch (error) {
  throw error;
}
}
