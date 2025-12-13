import { useTransactionStore } from "../store/transactionStore";

export default function TransactionTable() {
  const transactions = useTransactionStore((state) => state.transactions);
  const deleteTransaction = useTransactionStore(
    (state) => state.deleteTransaction
  );

  if (transactions.length === 0) {
    return (
      <div className="mt-10 bg-white p-6 rounded-xl shadow text-gray-500 text-lg">
        No transactions added yet.
      </div>
    );
  }
  return (
    <div className="mt-10 ml-2 bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">
        Transaction List
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-700">
            <th className="p-3">Amount</th>
            <th className="p-3">Type</th>
            <th className="p-3">Category</th>
            <th className="p-3">Date</th>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold">
                {t.type === "expense" ? (
                  <span className="text-red-600">- ${t.amount}</span>
                ) : (
                  <span className="text-red-600">+ ${t.amount}</span>
                )}
              </td>
              <td className="p-3 capitalize">{t.type}</td>
              <td className="p-3">{t.category}</td>
              <td className="p-3">{t.date}</td>
              <td className="p-3 text-gray-600">{t.description}</td>
              <td className="p-3">
                <button
                  onClick={() => deleteTransaction(t.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
