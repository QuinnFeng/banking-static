import { useTransactions } from "./TransactionProvider";

export const Transactions = () => {
  const { transactions } = useTransactions();

  return (
    <>
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
              </tr>
            </thead>
            {/* <tbody>
                {transactions.map((t) => <tr key={t.id}>
                  <td>{t.description}</td>
                  <td>{t.description}</td>
                  <td>{t.isDeposit ? "" : t.amount}</td>
                  <td>{t.isDeposit ? t.amount : ""}</td>
                  <td>{ t.balance}</td>
                </tr>)}
              </tbody> */}
          </table>
        </div>
      </section>
    </>
  );
};
