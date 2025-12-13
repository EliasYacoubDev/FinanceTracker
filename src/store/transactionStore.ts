import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist} from "zustand/middleware";

export interface Transaction{
    id:string;
    amount:number;
    category:string;
    date:string;
    description?:string;
}

interface TransactionState {
    transactions: Transaction[];
    addTransaction: (t:Omit<Transaction,"id">) => void;
    deleteTransaction: (id: string) => void;

    // summary selectors
    getIncome: () => number;
    getExpenses: () => number;
    getBalance: () => number;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [],

      addTransaction: (t) =>
        set((state) => ({
          transactions: [...state.transactions, { id: uuidv4(), ...t }],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((tx) => tx.id !== id),
        })),
      getIncome: () => {
          return 1800
      },
      getExpenses: () => {
          const tx = get().transactions;
          return tx.reduce((sum, t) => sum + t.amount, 0)
      },
      getBalance: () => {
          const income = get().getIncome();
          const expenses = get().getExpenses();
          return income - expenses;
      },
    }),
    {
      name: "finance-transactions", // key used in localStorage
    }
  )
);