import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable, ManyToMany } from 'typeorm';
import { Fireteam } from 'src/Fireteams/fireteams.entity';


@Entity('players')
export class Player {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({ length: 100 })
    pseudo: string;

    @Column({ name: 'mail', length: 100 })
    mail: string;

    @Column({ length: 1000 })
    password: string;


    @ManyToMany(() => Fireteam, fireteam => fireteam)
    @JoinTable({
        name: 'player_fireteam',
        joinColumn: {
            name: 'player_id', 
            referencedColumnName:'id',
        },
        inverseJoinColumn: {
            name: 'fireteam_id',
            referencedColumnName:'id',
    },
    })
    fireteams: Fireteam[];
}
  


