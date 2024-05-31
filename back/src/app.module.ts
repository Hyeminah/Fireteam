import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './Players/players.entity';
import { PlayerModule } from './Players/players.module';
import { FireteamModule } from './Fireteams/fireteams.module';
import { AuthModule } from './Auth/auth.module';
import { Fireteam } from './Fireteams/fireteams.entity';

@Module({
  imports: [
    PlayerModule,
    FireteamModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Player,Fireteam],
      synchronize: false,
      autoLoadEntities: true,
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}