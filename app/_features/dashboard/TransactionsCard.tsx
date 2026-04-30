import TableHeader from "@/app/_components/TableHeader";
import TransactionsHeader from "./TransactionsHeader";
import TransactionFooter from "./TransactionFooter";

export default function TransactionsCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl custom-shadow overflow-hidden border border-slate-100">
      <TransactionsHeader />
      <TableHeader />
      <TransactionFooter />
    </div>
  );
}
