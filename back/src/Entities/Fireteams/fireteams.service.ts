import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fireteam } from './fireteams.entity';
import { CreateFireteamDto } from './fireteams.dto'

@Injectable()
export class FireteamService {
  constructor(
    @InjectRepository(Fireteam)
    private readonly fireteamRepository: Repository<Fireteam>,
  ) {}

  async createFireteam (createFireteamDto: CreateFireteamDto): Promise<Fireteam> {
    const { title } = createFireteamDto;
    const fireteam = this.fireteamRepository.create({ title });
    return this.fireteamRepository.save(fireteam);
  }

//   async findAll(): Promise<Fireteam[]> {
//     return await this.fireteamRepository.find();
//   }

//   async findById(id: number): Promise<Fireteam> {
//     const fireteam = await this.fireteamRepository.findOne(id);
//     if (!fireteam) {
//       throw new NotFoundException('Fireteam not found');
//     }
//     return fireteam;
//   }

//   async delete(id: number): Promise<void> {
//     const result = await this.fireteamRepository.delete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException('Fireteam not found');
//     }
//   }
 }
