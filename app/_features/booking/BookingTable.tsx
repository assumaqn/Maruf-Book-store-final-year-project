import TableHeader from "@/app/_components/TableHeader";
import BookingFooter from "./BookingFooter";

function BookingTable() {
  return (
    <div className=" rounded-lg overflow-hidden">
      <div className="px-3 py-2 border-b border-slate-100 flex justify-between items-center bg-white">
        <h3 className="font-h3 text-h3 text-on-surface">Recent Inventory</h3>
      </div>
      <TableHeader />
      <BookingFooter />
    </div>
  );
}

export default BookingTable;
