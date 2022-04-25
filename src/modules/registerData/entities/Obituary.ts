import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToOne, JoinTable, JoinColumn, ManyToMany } from "typeorm";
import {v4 as uuidv4} from "uuid"
import { Person } from "./Person";

@Entity("obituary")
class Obituary{
  @PrimaryColumn()
  id?: string;

  @Column()
  death_date: Date | undefined;

  @Column()
  block:string | undefined;

  @Column()
  temporary_grave_number:string | undefined;

  @Column()
  final_grave_number:string | undefined;

  @Column()
  death_cause:string | undefined;

  @Column()
  death_certificate: number | undefined;

  @Column()
  notes?: string | undefined;

  @OneToOne(() => Person)
  @JoinColumn({name: "person_id"})
  person: Person;

  @Column()
  person_id: string;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor (id:string){
    if (!this.id){
      this.id=uuidv4();
    } else {
      this.id=id;
    }
  }
}

export {Obituary};