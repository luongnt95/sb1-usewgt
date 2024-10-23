import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column({ type: 'jsonb', default: {} })
  balances: Record<string, string>;

  @OneToOne(() => User, user => user.wallet)
  @JoinColumn()
  user: User;
}