import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function BookingFooter() {
  return (
    <div className="flex items-center justify-between bg-blue-100 px-2 py-3 text-xs text-gray-500">
      <div>
        <p>Rows per page: 10</p>
      </div>
      <div className="flex items-center gap-2">
        <p>1-10 of 124</p>
        <div className="flex items-center gap-2">
          <span>
            <FaLessThan />
          </span>
          <span>
            <FaGreaterThan />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookingFooter;
