import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("players_fireteams")
export class PlayerFireteam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playerId: number;

  @Column()
  fireteamId: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;
}
