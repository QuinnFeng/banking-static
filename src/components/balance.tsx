import { Link } from "react-router-dom";
import { useTransactions } from "./TransactionProvider";
import { ChangeEvent, useState } from "react";
import { formatNumber } from "../util/util";

export const Balance = () => {
  const { balance } = useTransactions();
  const [selectedOptionValue, setSelectedOptionValue] = useState("option1");
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionValue(event.target.value);
  };

  return (
    <>
      <div className="container balance">
        <h2>Selected Account</h2>
        <select
          value={selectedOptionValue}
          onChange={handleOptionChange}
        >
          <option value="option1">
            ***1119 - Capital Checking (Available ${formatNumber(balance)})
          </option>
          <option value="option2">
            ***1218 - Capital Checking (Available ${formatNumber(6512.18)})
          </option>
        </select>
      </div>
    </>
  );
};
