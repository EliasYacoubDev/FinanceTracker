import { useState } from "react";
import { useTransactionStore } from "../../store/transactionStore";

export default function IncomeForm() {
  const addTransaction = useTransactionStore((s) => s.addTransaction);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTransaction({
      type: "income",
      amount: Number(amount),
      date,
      notes: notes.trim(),
    });

    setAmount("");
    setNotes("");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Add Income</h2>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter income amount"
          className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700 mb-1">Notes</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Optional notes"
          className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all shadow-sm"
      >
        Add Income
      </button>
    </form>
  );
}
