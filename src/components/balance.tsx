import { Link } from "react-router-dom";
import { useTransactions } from "./TransactionProvider";
import { ChangeEvent, useState } from "react";

export const Balance = () => {
  const { balance } = useTransactions();
  const [selectedOptionValue, setSelectedOptionValue] = useState("option1");
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionValue(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>Selected Account</h2>
        <select
          value={selectedOptionValue}
          onChange={handleOptionChange}
        >
          <option value="option1">
            ***1119 - Capital Checking (Available ${balance})
          </option>
          <option value="option2">
            ***1218 - Capital Checking (Available ${balance})
          </option>
        </select>
        <p>{balance}</p>
      </div>

      <div className="links-container">
        <Link to="/addTransaction">
          <button className="btn">Add Transaction</button>
        </Link>
      </div>
    </>
  );
};
