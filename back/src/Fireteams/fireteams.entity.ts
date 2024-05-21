import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('fireteams')
@Unique(['title'])
export class Fireteam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;
}
