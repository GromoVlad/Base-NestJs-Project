import { MigrationInterface, QueryRunner } from 'typeorm';

export class users1647202951821 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
CREATE SCHEMA users;

create table users.user
(
    user_id                 serial                      not null constraint users_pk primary key,
    user_version            bigint      default 1       not null check(user_version > 0),
    user_email              varchar                     not null,
    user_password           varchar                     not null,
    user_name               varchar                     not null,
    user_auth_data_provider varchar     default 'local' not null,
    user_is_deleted         boolean     default false   not null,
    user_deleted_at         timestamptz default null,
    user_created_at         timestamptz default now()   not null
);

create unique index users_email_uindex on users.user (user_email) where user_is_deleted = false;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('drop schema users cascade;');
  }
}
