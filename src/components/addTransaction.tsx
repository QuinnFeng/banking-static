import { FormEvent, useState } from "react";
import { useTransactions } from "./TransactionProvider";
import { Link } from "react-router-dom";

export const AddTransaction = () => {
  const [isDeposit, setIsDeposit] = useState(false);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { isLoading, postTransaction, balance } = useTransactions();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTransaction(
      date,
      description,
      isDeposit,
      amount
    );
    resetValues();
  };

  const resetValues = () => {
    setIsDeposit(false);
    setAmount(0);
    setDate("");
    setDescription("");
  };

  return (
    <>
      <section className="">
        <form
          action=""
          onSubmit={(e) => formSubmitHandler(e)}
          id="add-transaction"
        >
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            disabled={isLoading}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoading}
          />
          <div>
            <label htmlFor="datePicker">Select a Date:</label>
            <input
              type="date"
              id="datePicker"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={isLoading}
            />
            <p>Selected Date: {date}</p>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={isDeposit}
                onChange={() => setIsDeposit(!isDeposit)}
                disabled={isLoading}
              />
              Is Deposit?
            </label>
          </div>
        </form>
        <div className="links-container">
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
        </div>
      </section>
    </>
  );
};
