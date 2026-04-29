import TransactionsHeader from "./TransactionsHeader";
import TransactionsTable from "./TransactionsTable";

export default function TransactionsCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl custom-shadow overflow-hidden border border-slate-100">
      <TransactionsHeader />
      <TransactionsTable />
    </div>
  );
}
