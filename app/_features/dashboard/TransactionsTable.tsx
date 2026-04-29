import TransactionRow from "./TransactionRow";

const data = [
  {
    name: "The Silent Patient",
    type: "Sell",
    date: "Oct 24, 2023",
    quantity: "02",
    status: "Completed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXuEZAT4SVHY0bGbkEGQu5rhD2HHKK_fqtZCvpIz9tC4dDzSecgnMmqbNB_-OnYOipU-tNhyVmWAyJsPUmG3YgMsBYqupYCtGl61els1OUulQS-TXrfs2vOP7avTJno2EJ-jCrGDKO90rzC1GRtKUJgd3BTDkVPSugmwl4Z2I8dAKSdSoyBSGxTaz40v_X_RbnPQ22bs5KlsItpPcjObVezkceea37DCAu6W7tFlc6EUkvfpZh25vH5sbPzojk_43inj-Y5Fk3TQPY",
  },
  {
    name: "The Great Gatsby",
    type: "Buy",
    date: "Oct 23, 2023",
    quantity: "15",
    status: "Pending",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIuRY4jF2iJPWdvicK7ZkulY_WvWd5P900xglJTZnZCcBHgM7QqLcqtdE1I8POwWeqkeKfjt2rU7SmVxUwAX_0_pPrEwu6pDvLJJHY0dsd28wY0l1OhpgilCmPEBdsg5ds6UOnpAM50PlF0th34WIB6_K7FsVX2gdQA6S3En8VwwkT-EUjyKxB4YzsLzswI4CZhl2vQdZIKv82G2qvuPYH25f68qnLbVAn6m8iIQ3ivu4Mr8SSeKcpUi3JpX3Ya8S_QcmUbBlovGSF",
  },
];

export default function TransactionsTable() {
  return (
    <div className="overflow-x-auto py-4 ">
      <table className="w-full text-left ">
        <thead>
          <tr className="bg-slate-50/40 px-5 py-5">
            <th className="px-lg py-md text-sm font-semibold text-slate-500 border-b border-slate-200">
              Book Name
            </th>
            <th className="px-lg py-md text-sm font-semibold text-slate-500 border-b border-slate-200">
              Type
            </th>
            <th className="px-lg py-md text-sm font-semibold text-slate-500 border-b border-slate-200">
              Date
            </th>
            <th className="px-lg py-md text-sm font-semibold text-slate-500 border-b border-slate-200">
              Quantity
            </th>
            <th className="px-lg py-md text-sm font-semibold text-slate-500 border-b border-slate-200">
              Status
            </th>
            <th className="px-lg py-md text-sm font-semibold text-slate-500 border-b border-slate-200 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-50">
          {data.map((item, index) => (
            <TransactionRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
