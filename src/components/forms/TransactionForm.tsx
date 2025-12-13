import { useState } from "react";
import { useTransactionStore } from "../../store/transactionStore";

type TransactionType = "income" | "expense";

export default function TransactionForm() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const [description, setDescription] = useState("");
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      category,
      amount: Number(amount),
      date,
      description: description.trim() || "No description",
    };

    addTransaction(newTransaction);

    console.log("Transaction added:", newTransaction);
    console.log(
      "All transactions:",
      useTransactionStore.getState().transactions
    );

    // Clear inputs
    setAmount("");
    setDescription("");
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
        Add Transaction
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Category */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Transaction Type
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            placeholder="Enter a category (e.g., Food, Transport, Bills)"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            value={date}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
            placeholder="Optional"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-lg"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
