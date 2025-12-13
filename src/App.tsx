import TransactionForm from "./components/forms/TransactionForm";
import SummaryCards from "./components/SummaryCards";
import TransactionTable from "./components/TransactionTable";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-12 px-4">
      <SummaryCards />
      <TransactionForm />
      <TransactionTable />
    </div>
  );
}
