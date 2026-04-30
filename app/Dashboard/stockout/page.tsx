import StockOutBody from "@/app/_features/stockout/StockOutBody";
import StockOutHeader from "@/app/_features/stockout/StockOutHeader";

function page() {
  return (
    <div className="flex flex-col gap-5">
      <StockOutHeader />
      <StockOutBody />
    </div>
  );
}

export default page;
