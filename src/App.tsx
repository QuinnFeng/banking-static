import { useState } from "react";
import "./App.css";
import "./index.css";
import { Header } from "./components/header";
import { Navigations } from "./components/navigation";
import { Transactions } from "./components/transactions";
import { Balance } from "./components/balance";
import { transactionRequests } from "./api";

function App() {
  const [page, setPage] = useState("My Accounts");
  const [category, setCategory] = useState("My Accounts");
  const [type, setType] = useState("Summary");


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
      <section className="activities container">
        <Balance />
        <Transactions />
      </section>
    </>
  );
}

export default App;
