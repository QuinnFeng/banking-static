import { SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { useTransactions } from "./TransactionProvider";
import { formatNumber } from "../util/util";
import ReactPaginate from "react-paginate";
import { transaction } from "../types";

export const Transactions = () => {
  const [tid, setTid] = useState(0);
  const { transactions, deleteTransaction } = useTransactions();
  const pageCount = 12;
  const [pageOffset, setPageOffset] = useState(0);
  const [repositories, setRepositories] = useState<transaction[]>([]);

  useEffect(() => {
    setRepositories(slicedTransaction);
  }, [pageOffset, transactions]);

  function slicedTransaction() {
    return transactions.slice(
      pageOffset * pageCount,
      (pageOffset + 1) * pageCount
    );
  }

  const handlePageChange = (event: { selected: SetStateAction<number> }) => {
    setPageOffset(event.selected);
  };

  return (
    <>
      <div
        className="delete-transaction"
        style={{ display: "none" }}
      >
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
        <div className="transactions-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
                {/* <th>id</th> */}
              </tr>
            </thead>
            <tbody>
              {repositories.map((t: transaction) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.isDeposit ? "" : formatNumber(t.amount)}</td>
                  <td>{t.isDeposit ? formatNumber(t.amount) : ""}</td>
                  <td>{formatNumber(t.balance)}</td>
                  {/* <td>{t.id}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={Math.ceil(transactions.length / pageCount)}
            marginPagesDisplayed={16}
            pageRangeDisplayed={pageCount}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={pageOffset}
          />
        </div>
      </section>
    </>
  );
};
