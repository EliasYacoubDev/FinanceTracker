import { useState } from "react";
import TransactionPage from "./pages/TransactionPage";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-200">
      {page !== "signout" && <Sidebar current={page} onChange={setPage} />}
      <div className="flex-1 overflow-y-auto p-6">
        {page === "transactions" && <TransactionPage />}
        {page === "signout" && <LoginPage />}
      </div>
    </div>
  );
}
