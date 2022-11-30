import { Report } from 'src/reports/reports.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @Column({ default: true })
  admin: boolean;

  @AfterInsert()
  logInsert() {
    console.log(`Inserted user with ID: ${this.id}`);
  }
  @AfterUpdate()
  logUpdate() {
    console.log(`Updated user with ID: ${this.id}`);
  }
  @AfterRemove()
  logRemove() {
    console.log(`Removed user with ID: ${this.id}`);
  }
}