import StockOutForm from "./StockOutForm";
import StockOutTable from "./StockOutTable";
import TableHeader from "./TableHeader";

function StockOutBody() {
  return (
    <div className="grid grid-cols-[1fr_2fr] justify-between items-start gap-8">
      <StockOutForm />
      <div>
        <TableHeader />
        <StockOutTable />
      </div>
    </div>
  );
}

export default StockOutBody;
