import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './Entities/Players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './Entities/Players/players.entity';
import { FireteamModule } from './Entities/Fireteams/fireteams.module'; 
import { Fireteam } from './Entities/Fireteams/fireteams.entity'; 



@Module({
  imports: [
    FireteamModule,
    PlayerModule,
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', 
      port: 5434, 
      username: 'myuser', 
      password: 'mypassword', 
      database: 'my_database', 
      entities: [ Fireteam, Player], 
      synchronize: false, 
      autoLoadEntities: true,
      logging:true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
