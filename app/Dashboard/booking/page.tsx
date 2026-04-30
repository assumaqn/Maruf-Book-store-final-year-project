import BookingHeader from "@/app/_features/booking/BookingHeader";
import BookingStats from "@/app/_features/booking/BookingStats";
import BookingTable from "@/app/_features/booking/BookingTable";

function page() {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <BookingHeader />
      <BookingTable />
      <BookingStats />
    </div>
  );
}

export default page;
