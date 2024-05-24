import { Module } from "@nestjs/common";
import { PlayerController } from "./players.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Player } from "./players.entity";
import { PlayerService } from "./players.service";
import { AuthModule } from "src/Auth/auth.module";

@Module ({
    imports: [TypeOrmModule.forFeature([Player]),
    AuthModule],
    controllers: [PlayerController],
    providers: [PlayerService],
    exports: [PlayerService]
})
export class PlayerModule {}