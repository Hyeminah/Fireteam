import { Player } from 'src/Players/players.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,JoinColumn } from 'typeorm';
import { Fireteam } from 'src/Fireteams/fireteams.entity';

@Entity("players_fireteams")
export class PlayerFireteam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(() => Fireteam, fireteam => fireteam)
  @JoinColumn({ name: 'fireteam_id' })
  fireteam: Fireteam[];

@ManyToOne(() => Player, player => player)
@JoinColumn({ name: 'player_id'})
player: Player[];
}

