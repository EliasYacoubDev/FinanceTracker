import { useTransactionStore } from "../store/transactionStore";

export default function SummaryCards() {
  const income = useTransactionStore((state) => state.getIncome());
  const expenses = useTransactionStore((state) => state.getExpenses());
  const balance = useTransactionStore((state) => state.getBalance());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-10 mr-2">
      {/* Income Card */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-600">Total Income</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">${income}</p>
      </div>
      {/* Expense Card */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-600">Total Expenses</h3>
        <p className="text-3xl font-bold text-red-600 mt-2">${expenses}</p>
      </div>
      {/* Balance Card */}
      <div className="bg-white p-6 shadow-md rounded-xl border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-600">Total Balance</h3>
        <p
          className={`text-3xl font-bold mt-2 ${
            balance >= 0 ? "text-blue-600" : "text-red-600"
          }`}
        >
          ${balance}
        </p>
      </div>
    </div>
  );
}
