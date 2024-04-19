import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['title'])
export class Fireteam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;
}
