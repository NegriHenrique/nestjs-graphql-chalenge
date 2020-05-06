import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1588738605406 implements MigrationInterface {
  private usersTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isGenerated: true, // Auto-increment
        isPrimary: true,
        generationStrategy: 'increment',
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.usersTable);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.usersTable);
  }
}
