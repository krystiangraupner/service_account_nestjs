import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  user_name : string

  @Column({length: 250})
  password : string

  @Column({length: 200})
  email : string

  @Column({length: 200})
  token : string

  @Column()
  datecreated : Date

  @Column()
  dateconfirmed : Date

  @Column({length: 200})
  datecanceled : string

  @Column({length: 250})
  image : string

}