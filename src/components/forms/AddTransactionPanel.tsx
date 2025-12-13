import { useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";

export default function addTransactionPanel() {
  const [type, setType] = useState<"expense" | "income">("expense");
  return (
    <div className="bg-white shadow-xl rounded-xl p-8 max-w-2xl w-full">
      <div className="flex mb-6 gap-3">
        <button
          className={`w-full py-2 rounded-lg font-semibold ${
            type === "expense" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setType("expense")}
        >
          Add Expense
        </button>
        <button
          className={`w-full py-2 rounded-lg font-semibold ${
            type === "income" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setType("income")}
        >
          Add Income
        </button>
      </div>
      {type === "expense" ? <ExpenseForm /> : <IncomeForm />}
    </div>
  );
}
