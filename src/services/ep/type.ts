export interface TransactionProps {
  _id: string;
  date: Date;
  description: string;
  amount: string;
}

export interface CustomerProps {
  _id: string;
  name: string;
  balance: string;
  transactions: TransactionProps[];
}
