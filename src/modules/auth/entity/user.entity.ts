import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users.user')
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;
  @Column({ name: 'user_version' })
  version: number;
  @Column({ name: 'user_name' })
  name: string;
  @Column({ name: 'user_email' })
  email: string;
  @Column({ name: 'user_password' })
  password: string;
  @Column({ name: 'user_auth_data_provider' })
  authDataProvider: string;
  @Column({ name: 'user_is_deleted' })
  isDeleted: boolean;
  @Column({ type: 'timestamptz', name: 'user_created_at' })
  createdAt!: Date;
  @Column({ type: 'timestamptz', name: 'user_deleted_at' })
  deletedAt!: Date;
}
