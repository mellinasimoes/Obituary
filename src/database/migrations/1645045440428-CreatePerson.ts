import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePerson1645045440428 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "person",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "birth_date",
            type: "timestamp",
          },
          {
            name: "profession",
            type: "varchar",
          },
          {
            name: "citizenship",
            type: "varchar",
          },
          {
            name: "birth_state",
            type: "varchar",
          },
          {
            name: "birth_city",
            type: "varchar",
          },
          {
            name: "race",
            type: "varchar",
          },
          {
            name: "mothers_name",
            type: "varchar",
          },
          {
            name: "fathers_name",
            type: "varchar",
          },
          {
            name: "notes",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("person");
  }
}
