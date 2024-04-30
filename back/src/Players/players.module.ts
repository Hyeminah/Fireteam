import { Module } from "@nestjs/common";
import { PlayerController } from "./players.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Player } from "./players.entity";
import { PlayerService } from "./players.service";

@Module ({
    imports: [TypeOrmModule.forFeature([Player])],
    controllers: [PlayerController],
    providers: [PlayerService],
    exports: [PlayerService]
})
export class PlayerModule {}