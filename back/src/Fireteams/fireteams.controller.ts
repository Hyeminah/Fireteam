// import { Controller, Get, Post, Body, HttpStatus, Res, NotFoundException } from '@nestjs/common';
// import { FireteamService } from './fireteams.service';
// import { CreateFireteamDto } from './fireteams.dto';
// import { Fireteam } from './fireteams.entity';

// @Controller()
// export class FireteamController {
//   constructor(private readonly fireteamService: FireteamService) {}

//   @Post("register")
//     fireteam (@Body() fireteam: CreateFireteamDto) {
//         console.log(fireteam);
//         return this.fireteamService.createFireteam  (fireteam);
//     }

  
  // @Post()
  // async create(@Body() createFireteamDto: CreateFireteamDto): Promise<Fireteam> {
  //   return await this.fireteamService.create(createFireteamDto);
  // }

//   @Get()
//   async findAll(): Promise<Fireteam[]> {
//     return await this.fireteamService.findAll();
//   }
// }
