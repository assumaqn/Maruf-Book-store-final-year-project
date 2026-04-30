import StockinTableHeader from "@/app/_features/Stockin/StockinTableHeader";
import StockinForm from "../../_features/Stockin/StockinForm";

function page() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 justify-between items-start">
        <StockinForm />
        <StockinTableHeader />
      </div>
    </div>
  );
}

export default page;
