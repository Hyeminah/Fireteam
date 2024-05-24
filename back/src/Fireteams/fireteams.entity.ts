import { Player } from 'src/Players/players.entity';
import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, ManyToOne, JoinColumn,JoinTable } from 'typeorm';

@Entity('fireteams')
@Unique(['title'])
export class Fireteam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @ManyToMany(() => Player, player => player)
  
  @JoinTable({
    name: 'players_fireteams',
    joinColumn: {
        name: 'fireteam_id', 
        referencedColumnName:'id',
    },
    inverseJoinColumn: {
        name: 'player_id',
        referencedColumnName:'id',
},

})
players: Player[ ];
}

