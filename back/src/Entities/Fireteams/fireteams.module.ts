import { Module } from "@nestjs/common";
import { FireteamController } from  "./fireteams.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fireteam } from "./fireteams.entity";
import { FireteamService } from "./fireteams.service";

@Module ({
    imports: [TypeOrmModule.forFeature([Fireteam])],
    controllers: [FireteamController],
    providers: [FireteamService],
    exports: [FireteamService]
})
export class FireteamModule {}