import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateObituary1645202366315 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "obituary",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary:true
                    },
                    {
                        name:"person_id",
                        type:"uuid",
                        isUnique: true,
                    },
                    {
                        name: "death_date",
                        type: "timestamp",
                    },   
                    {
                        name: "block",
                        type: "varchar",
                    },   
                    {
                        name: "temporary_grave_number",
                        type: "varchar",
                    },   
                    {
                        name: "final_grave_number",
                        type: "varchar",
                    },    
                    {
                        name: "death_cause",
                        type: "varchar",
                    },
                    {
                        name: "death_certificate",
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
                foreignKeys: [
                    {
                      name: "FKPersonId",
                      referencedTableName: "person",
                      referencedColumnNames: ["id"],
                      columnNames: ["person_id"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("obituary");
    }
    }
