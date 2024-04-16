import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Fireteam } from 'src/Entities/Fireteams/fireteams.entity';


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
}

    // @OneToMany(() => Fireteam, fireteam => players_fireteams)
    // fireteams: Fireteam[];


