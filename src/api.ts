import { account, transaction } from "./types";

const baseUrl = "http://localhost:3000";
const headers = {
  "Content-type": "application/json",
};

const getAllTransactions = () => {
  return fetch(`${baseUrl}/transactions`).then((data) => data.json());
};

const postTransaction = ({
  date,
  description,
  isDeposit,
  amount,
}: Partial<transaction>) => {
  return fetch(`${baseUrl}/transactions`, {
    method: "POST",
    headers,
    body: JSON.stringify({ date, description, isDeposit, amount }),
  }).then((data) => data.json());
};

const deleteTransactionRequest = (id: number) => {
  return fetch(`${baseUrl}/transactions/${id}`, {
    method: "DELETE",
  })
    .then((response) => response)
    .catch((error) => {
      console.error(error);
    });
};

const getAccountBalance = (id: number): Promise<number> => {
  return fetch(`${baseUrl}/accounts/${id}`)
    .then((response) => response.json())
    .then((data) => data.balance);
};

const updateAccountBalance = (id: number, updatedAccount: Partial<account>) => {
  return fetch(`${baseUrl}/accounts/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(updatedAccount),
  });
};

export const transactionRequests = {
  getAllTransactions,
  deleteTransactionRequest,
  postTransaction,
  getAccountBalance,
  updateAccountBalance,
};
