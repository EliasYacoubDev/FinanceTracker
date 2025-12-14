import { FiLogOut } from "react-icons/fi";
import { MdDashboard, MdReceipt } from "react-icons/md";

export default function Sidebar({
  current,
  onChange,
}: {
  current: string;
  onChange: (section: string) => void;
}) {
  return (
    <div className="h-screen w-64 bg-[#0A2342] text-white flex flex-col shadow-lg">
      <h1 className="p-6 text-2xl font-bold tracking-wide">Finance App</h1>

      <nav className="flex flex-col gap-2 px-4">
        {/* Dashboard */}
        <button
          onClick={() => onChange("dashboard")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all
            ${
              current === "dashboard" ? "bg-[#10315A]" : "hover:bg-[#10315A]/60"
            }`}
        >
          <MdDashboard size={22} />
          Dashboard
        </button>

        {/* Transactions */}
        <button
          onClick={() => onChange("transactions")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all
            ${
              current === "transactions"
                ? "bg-[#10315A]"
                : "hover:bg-[#10315A]/60"
            }`}
        >
          <MdReceipt size={22} />
          Transactions
        </button>
      </nav>
      <div className="flex-grow"></div>
      <div className="p-4">
        <button
          onClick={() => onChange("signout")}
          className="flex items-center gap-3 px-4 py-2 w-full rounded-lg bg-red-600 hover:bg-red-700 transition-all text-left"
        >
          <FiLogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
}
