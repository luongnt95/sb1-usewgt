import { User } from '../../user/entities/user.entity';
export declare enum OrderType {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum OrderStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class Order {
    id: string;
    type: OrderType;
    cryptoCurrency: string;
    amount: number;
    price: number;
    status: OrderStatus;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
