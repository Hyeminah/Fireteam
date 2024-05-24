import { Module } from "@nestjs/common";
import { FireteamController } from  "./fireteams.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fireteam } from "./fireteams.entity";
import { FireteamService } from "./fireteams.service";
import { Player } from "src/Players/players.entity";

@Module ({
    imports: [TypeOrmModule.forFeature([Fireteam, Player])],
    controllers: [FireteamController],
    providers: [FireteamService],
    exports: [FireteamService]
})
export class FireteamModule {}


