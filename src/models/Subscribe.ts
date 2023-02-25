import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column
} from 'typeorm'
import { User } from './User'

@Entity()
export class Subscribe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn()
  user: User['id']

  @Column()
  email: string
}
