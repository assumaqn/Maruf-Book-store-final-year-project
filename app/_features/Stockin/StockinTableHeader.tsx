import StockinHeader from "./StockinHeader";
import StockinTable from "./StockinTable";

function StockinTableHeader() {
  return (
    <div className="col-span-2">
      <StockinHeader />
      <StockinTable />
    </div>
  );
}

export default StockinTableHeader;
