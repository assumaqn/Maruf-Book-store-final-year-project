import TableRow from "./TableRow";

export const transactions = [
  {
    id: 1,
    name: "The Silent Patient",
    type: "Sell",
    date: "Oct 24, 2023",
    quantity: 2,
    status: "Completed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIuRY4jF2iJPWdvicK7ZkulY_WvWd5P900xglJTZnZCcBHgM7QqLcqtdE1I8POwWeqkeKfjt2rU7SmVxUwAX_0_pPrEwu6pDvLJJHY0dsd28wY0l1OhpgilCmPEBdsg5ds6UOnpAM50PlF0th34WIB6_K7FsVX2gdQA6S3En8VwwkT-EUjyKxB4YzsLzswI4CZhl2vQdZIKv82G2qvuPYH25f68qnLbVAn6m8iIQ3ivu4Mr8SSeKcpUi3JpX3Ya8S_QcmUbBlovGSF",
  },
  {
    id: 2,
    name: "Atomic Habits",
    type: "Stock In",
    date: "Oct 22, 2023",
    quantity: 5,
    status: "Pending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWC7qhIfXPSF-eporQQggZ9sRuBXOJf0ekpPfVxq_aoek1HTS8_RAuSeZf5ChuMlJwDxsoX-DUhmmQL3MdXUGqiTz8C94CTWrHzRWQjIW_pkZZPUOi-URjw6nDd4GVmYjo1pPFr4tHSofGYyBWFqFQnuBZxNufP8Gi3J_LDPG1t7WYr13KuFrHo_DM05XtXXcE_P9MEhVY2sCPlwfwAArpbZT2eG25QuR-9SVMERM7gxKne_BB9tvXv3gviSDrT6PbiZIlOpmODPpO",
  },
  {
    id: 3,
    name: "Rich Dad Poor Dad",
    type: "Sell",
    date: "Oct 20, 2023",
    quantity: 1,
    status: "Completed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-04g3Nk_kvvtbwCLLFxJ9foBf7D2kXk5yOIsjXgXmsoyl-u1B-vUEMfD1pAgespFt_ya86gIGFt5GXeoX3pN9HvCZ3pa00uAyfrYw-mnXhPY_JM6yLUKgWmUO6lSWHzj-PaSstXe3iVLaMyK3AsKZQSz3DXMQH1knXLPl1fyuTKiR6FWKDen1_5l3VjocMpOykm9LGj8H0phcvwg6qHF_kjCsgV0CHnpZnXW6Y9cpqcMTVRQ_oXmsv56kpv0YRCNJY3OK68muytUF",
  },
  {
    id: 4,
    name: "Deep Work",
    type: "Stock Out",
    date: "Oct 18, 2023",
    quantity: 3,
    status: "Cancelled",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-04g3Nk_kvvtbwCLLFxJ9foBf7D2kXk5yOIsjXgXmsoyl-u1B-vUEMfD1pAgespFt_ya86gIGFt5GXeoX3pN9HvCZ3pa00uAyfrYw-mnXhPY_JM6yLUKgWmUO6lSWHzj-PaSstXe3iVLaMyK3AsKZQSz3DXMQH1knXLPl1fyuTKiR6FWKDen1_5l3VjocMpOykm9LGj8H0phcvwg6qHF_kjCsgV0CHnpZnXW6Y9cpqcMTVRQ_oXmsv56kpv0YRCNJY3OK68muytUF",
  },
];

function TableHeader() {
  return (
    <div className="bg-white  shadow-sm border border-slate-200 overflow-hidden">
      <table className="w-full border-collapse">
        {/* HEADER */}
        <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
          <tr>
            <th className="text-left px-6 py-4 font-semibold">Book Name</th>
            <th className="text-left px-6 py-4 font-semibold">Type</th>
            <th className="text-left px-6 py-4 font-semibold">Date</th>
            <th className="text-left px-6 py-4 font-semibold">Quantity</th>
            <th className="text-left px-6 py-4 font-semibold">Status</th>
            <th className="text-right px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-slate-700 text-sm">
          {transactions.map((item) => (
            <TableRow key={item.id} transaction={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableHeader;

/*
 <td className="px-6 py-4 flex items-center gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="book"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="font-medium">The Silent Patient</span>
            </td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                Sell
              </span>
            </td>

            <td className="px-6 py-4">Oct 24, 2023</td>

            <td className="px-6 py-4 font-medium">02</td>

            <td className="px-6 py-4">
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                Completed
              </span>
            </td>

            <td className="px-6 py-4 text-right">
              <button className="text-slate-400 hover:text-slate-700">⋮</button>
            </td>
            */
