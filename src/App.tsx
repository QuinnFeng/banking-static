import { useState } from "react";
import "./App.css";
import "./index.css";
import { Header } from "./components/header";
import { Navigations } from "./components/navigation";
import { Transactions } from "./components/transactions";
import { Balance } from "./components/balance";
import { transactionRequests } from "./api";
import { TransactionProvider } from "./components/TransactionProvider";
import { AddTransaction } from "./components/addTransaction";
import { descriptions } from "./util/const";

function App() {
  const [page, setPage] = useState("My Accounts");
  const [category, setCategory] = useState("My Accounts");
  const [type, setType] = useState("Summary");
  const [isCreate, setIsCreate] = useState(false);

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
      />
      <Navigations
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
      />
      <button
        className="btn"
        onClick={() => setIsCreate(!isCreate)}
      >
        {isCreate ? "Home" : "Post Transaction"}
      </button>
      <TransactionProvider>
        {isCreate ? (
          <section>
            <AddTransaction />
          </section>
        ) : (
          <section className="activities container">
            <Balance />
            <Transactions />
          </section>
        )}
      </TransactionProvider>
      <datalist id="descriptions">
        {descriptions.map((description) => (
          <option key={description}>{description}</option>
        ))}
      </datalist>
    </>
  );
}

export default App;
