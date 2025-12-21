import { useState } from "react";
import TransactionPage from "./pages/TransactionPage";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuthStore } from "./store/authStore";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const onLogin = () => {
    setPage("dashboard");
  };
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-200">
      {isAuth && page !== "signout" && (
        <Sidebar current={page} onChange={setPage} />
      )}
      <div className="flex-1 overflow-y-auto p-6">
        {!isAuth ? (
          <LoginPage onLogin={onLogin} />
        ) : (
          <>
            {page === "transactions" && <TransactionPage />}
            {page === "dashboard" && <DashboardPage />}
          </>
        )}
      </div>
    </div>
  );
}
