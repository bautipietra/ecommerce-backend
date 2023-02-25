import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinColumn,
  JoinTable
} from 'typeorm'
import { Product } from './Product'
import { User } from './User'

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product

  @Column()
  quantity: number
}
