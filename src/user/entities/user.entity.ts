import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Wallet } from './wallet.entity';
import { Transaction } from '../../otc/entities/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hashedPassword: string;

  @Column({ default: false })
  isTwoFactorEnabled: boolean;

  @Column({ nullable: true })
  twoFactorSecret?: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ type: 'json', nullable: true })
  kycData: any;

  @OneToOne(() => Wallet, wallet => wallet.user)
  wallet: Wallet;

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];
}