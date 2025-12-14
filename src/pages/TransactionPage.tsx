import TransactionTable from "../components/TransactionTable";
import AddTransactionPanel from "../components/forms/AddTransactionPanel";
import SummaryCards from "../components/SummaryCards";
export default function TransactionPage() {
  return (
    <div className="flex gap-10 w-full px-10 py-6">
      <div className="w-1/2">
        <AddTransactionPanel />
      </div>
      <div className="w-1/2 space-y-6">
        <SummaryCards />
        <TransactionTable />
      </div>
    </div>
  );
}
