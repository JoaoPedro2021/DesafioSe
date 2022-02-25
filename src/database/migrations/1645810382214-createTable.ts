import {MigrationInterface, QueryRunner} from "typeorm";

export class createTable1645810382214 implements MigrationInterface {
    name = 'createTable1645810382214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cep" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cep" SET NOT NULL`);
    }

}
