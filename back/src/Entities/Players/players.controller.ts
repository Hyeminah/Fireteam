import { Body, Controller, Post } from "@nestjs/common";
import { CreatePlayerDto } from "./players.dto";
import { PlayerService } from "./players.service";
import { Player } from "./players.entity";

@Controller()

export class PlayerController {
    constructor (private readonly playersService: PlayerService ) {}
    
    @Post("register")
    async createPlayer (@Body() CreatePlayerDto: CreatePlayerDto,): Promise<Player>  {
        console.log(CreatePlayerDto);
        return this.playersService.createPlayer(CreatePlayerDto);
    }
    
}
