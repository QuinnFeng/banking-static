import { ChangeEvent, FormEvent, useState } from "react";
import { useTransactions } from "./TransactionProvider";

export const AddTransaction = () => {
  const [isDeposit, setIsDeposit] = useState(false);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [description, setDescription] = useState("");
  const { isLoading, createTransaction } = useTransactions();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTransaction(formattedDate, description, isDeposit, amount);
    resetValues();
  };

  const resetValues = () => {
    setIsDeposit(false);
    setAmount(0);
    setDescription("");
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const [year, month, day] = selectedDate.split("-");
    const formatted = `${month}/${day}/${year}`;
    setDate(selectedDate);
    setFormattedDate(formatted);
  };

  return (
    <>
      <section className="">
        <form
          action=""
          id="add-transaction"
          onSubmit={(e) => formSubmitHandler(e)}
        >
          <div>
            <label htmlFor="amount">Amount: </label>
            <input
              id="amount"
              type="number"
              value={amount || ""}
              onChange={(e) => {
                setAmount(+e.target.value);
              }}
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isLoading}
              list={"descriptions"}
            />
          </div>
          <div>
            <label htmlFor="datePicker">Select a Date: </label>
            <input
              type="date"
              id="datePicker"
              value={date}
              onChange={handleDateChange}
              disabled={isLoading}
            />
          </div>
          <div>
            <label>
              <input
                id="deposit"
                type="checkbox"
                checked={isDeposit}
                onChange={() => setIsDeposit(!isDeposit)}
                disabled={isLoading}
              />
              &emsp;Is Deposit?
            </label>
          </div>
          <input
            type="submit"
            value="submit"
          />
        </form>
      </section>
    </>
  );
};
