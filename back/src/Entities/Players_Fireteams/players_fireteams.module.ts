import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerFireteam } from './players_fireteams.entity';
import { PlayerFireteamController } from './players_fireteams.controller';
import { PlayerFireteamService } from './players_fireteams.service';


@Module({
  imports: [TypeOrmModule.forFeature([PlayerFireteam])],
  controllers: [PlayerFireteamController],
  providers: [PlayerFireteamService],
})
export class PlayerFireteamModule {}
