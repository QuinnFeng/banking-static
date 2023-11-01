import { useState } from "react";
import { useTransactions } from "./TransactionProvider";
import { formatNumber } from "../util/util";

export const Transactions = () => {
  const [tid, setTid] = useState(0);
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <>
      <div className="delete-transaction">
        <input
          type="number"
          value={tid}
          onChange={(e) => setTid(+e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            deleteTransaction(tid);
            setTid(0);
          }}
        >
          confirm
        </button>
      </div>
      <section className="summary">
        <div className="access">
          <p>Your account activities</p>
          <span>
            <i className="fa-solid fa-print"></i>print
          </span>
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>search
          </span>
          <span>
            <i className="fa-sharp fa-regular fa-file-excel"></i>excel
          </span>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.isDeposit ? "" : "$" + formatNumber(t.amount)}</td>
                  <td>{t.isDeposit ? "$" + formatNumber(t.amount) : ""}</td>
                  <td>{"$" + formatNumber(t.balance)}</td>
                  <td>{t.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
