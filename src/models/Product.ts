import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  brand: string

  @Column()
  gender: boolean

  @Column()
  price: number

  @Column()
  title: string

  @Column({ array: true })
  image: string

  @Column({ array: true })
  color: string
}
