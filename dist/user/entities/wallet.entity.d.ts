import { User } from './user.entity';
export declare class Wallet {
    id: string;
    address: string;
    balances: Record<string, string>;
    user: User;
}
