type Transaction = {
  id: number;
  name: string;
  type: string;
  date: string;
  quantity: number;
  status: string;
  image: string;
};

type TableRowProps = {
  transaction: Transaction;
};

function TableRow({ transaction }: TableRowProps) {
  return (
    <tr className="border-t-[0.5px] border-gray-200">
      <td className="px-6 py-2 flex items-center gap-3">
        <img
          src={transaction.image}
          alt={transaction.name}
          className="w-10 h-10 rounded-md object-cover"
        />
        <span className="font-medium">{transaction.name}</span>
      </td>

      <td className="px-6 py-4">{transaction.type}</td>

      <td className="px-6 py-4">{transaction.date}</td>

      <td className="px-6 py-4 font-medium">
        {transaction.quantity.toString().padStart(2, "0")}
      </td>

      <td className="px-6 py-4">{transaction.status}</td>

      <td className="px-6 py-4 text-right">⋮</td>
    </tr>
  );
}

export default TableRow;
