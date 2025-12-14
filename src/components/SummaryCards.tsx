import { useTransactionStore } from "../store/transactionStore";

export default function SummaryCards() {
  const income = useTransactionStore((state) => state.getIncome());
  const expenses = useTransactionStore((state) => state.getExpenses());
  const balance = useTransactionStore((state) => state.getBalance());

  return (
    <div className="grid grid-cols-3 gap-6 w-full mt-10 ml-2">
      {/* Income Card */}
      <div className="w-full bg-white p-6 shadow-md rounded-xl border border-gray-100 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-600 h-10 flex items-center justify-center whitespace-nowrap">
          Total Income
        </h3>
        <p className="text-3xl font-bold text-green-600 mt-2">${income}</p>
      </div>
      {/* Expense Card */}
      <div className="w-full bg-white p-6 shadow-md rounded-xl border border-gray-100 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-600 h-10 flex items-center justify-center whitespace-nowrap">
          Total Expenses
        </h3>
        <p className="text-3xl font-bold text-red-600 mt-2">${expenses}</p>
      </div>
      {/* Balance Card */}
      <div className="w-full bg-white p-6 shadow-md rounded-xl border border-gray-100 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-600 h-10 flex items-center justify-center whitespace-nowrap">
          Total Balance
        </h3>
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
