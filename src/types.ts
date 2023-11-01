export interface transaction {
  id?: number;
  isDeposit: boolean;
  amount: number;
  date: string;
  description: string;
  balance: number;
}

export interface account {
  id?: number;
  balance: number;
}
