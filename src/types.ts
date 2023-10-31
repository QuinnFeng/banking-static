export interface transaction{
  id?: number;
  isDeposit: boolean;
  amount: number;
  date: string;
  description: string;
}

export interface account{
  id?: number;
  balance: number;
}