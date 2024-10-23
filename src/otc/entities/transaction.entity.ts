import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Order } from './order.entity';

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'decimal', precision: 18, scale: 8 })
  amount: number;

  @Column()
  currency: string;

  @Column({ type: 'enum', enum: TransactionStatus })
  status: TransactionStatus;

  @Column({ type: 'jsonb', nullable: true })
  paymentDetails: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;
}