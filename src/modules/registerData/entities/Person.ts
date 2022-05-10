import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("person")
class Person {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string | undefined;

  @Column()
  cpf: string | undefined;

  @Column()
  birth_date: Date | undefined;

  @Column()
  birth_city: string | undefined;

  @Column()
  birth_state: string | undefined;

  @Column()
  citizenship: string | undefined;

  @Column()
  fathers_name: string | undefined;

  @Column()
  mothers_name: string | undefined;

  @Column()
  profession: string | undefined;

  @Column()
  race: string | undefined;

  @Column()
  notes: string | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor(id?: string) {
    if (!this.id) {
      this.id = uuidV4();
    } else {
      this.id = id;
    }
  }
}

export { Person };
