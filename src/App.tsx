import { useState } from "react";
import "./App.css";
import "./index.css"
import { Header } from "./components/header";
import { Navigations } from "./components/navigation";

function App() {
  const [page, setPage] = useState("My Accounts");
  const [category, setCategory] = useState("My Accounts");
  const [type, setType] = useState("Summary");
  const [loading, isLoading] = useState(false);


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
    </>
  );
}

export default App;
