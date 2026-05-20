import Table from "@/app/_components/Table";

const users = [
  { id: 1, name: "John Doe", email: "john@gmail.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "Manager" },
];

function UserTable() {
  return (
    <Table
      columns={["Name", "Email", "Role", "Actions"]}
      data={users}
      renderRow={(user) => (
        <>
          <td className="px-6 py-3">{user.name}</td>
          <td className="px-6 py-3">{user.email}</td>
          <td className="px-6 py-3">{user.role}</td>
          <td className="px-6 py-3 text-right">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md">
              Delete
            </button>
          </td>
        </>
      )}
    />
  );
}

export default UserTable;
