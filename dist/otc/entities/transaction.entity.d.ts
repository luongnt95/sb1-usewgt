import { User } from '../../user/entities/user.entity';
import { Order } from './order.entity';
export declare enum TransactionStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare class Transaction {
    id: string;
    order: Order;
    user: User;
    amount: number;
    currency: string;
    status: TransactionStatus;
    paymentDetails: Record<string, any>;
    createdAt: Date;
}
