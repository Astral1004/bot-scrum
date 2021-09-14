import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRoleDB1628087111658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "roles" ("createdDate", "updatedDate", "isDeleted", "name") VALUES (DEFAULT, DEFAULT, DEFAULT, 'Пользователь')`,
    );
    await queryRunner.query(
      `INSERT INTO "roles" ("createdDate", "updatedDate", "isDeleted", "name") VALUES (DEFAULT, DEFAULT, DEFAULT, 'Администратор')`,
    );
    await queryRunner.query(
      `INSERT INTO "roles" ("createdDate", "updatedDate", "isDeleted", "name") VALUES (DEFAULT, DEFAULT, DEFAULT, 'Руководитель')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
