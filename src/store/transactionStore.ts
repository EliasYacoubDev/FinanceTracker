import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist} from "zustand/middleware";

export interface Transaction{
    id:string;
    amount:number;
    type:"income" | "expense";
    category:string;
    date:string;
    description?:string;
}

interface TransactionState {
    transactions: Transaction[];
    addTransaction: (t:Omit<Transaction,"id">) => void;
    deleteTransaction: (id: string) => void;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      transactions: [],

      addTransaction: (t) =>
        set((state) => ({
          transactions: [...state.transactions, { id: uuidv4(), ...t }],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((tx) => tx.id !== id),
        })),
    }),
    {
      name: "finance-transactions", // key used in localStorage
    }
  )
);