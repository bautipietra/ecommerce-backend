import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { User } from './User'

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @Column()
  name: string

  @Column()
  body: string
}
