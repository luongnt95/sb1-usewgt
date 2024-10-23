import { Wallet } from './wallet.entity';
import { Transaction } from '../../otc/entities/transaction.entity';
export declare class User {
    id: string;
    email: string;
    hashedPassword: string;
    isTwoFactorEnabled: boolean;
    twoFactorSecret?: string;
    isVerified: boolean;
    kycData: any;
    wallet: Wallet;
    transactions: Transaction[];
}
