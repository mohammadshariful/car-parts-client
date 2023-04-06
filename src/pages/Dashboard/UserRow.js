import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {

  const { email, role } = user;

  const makeAdmin = () => {
    const url = `https://proper-parts-server-74zj.onrender.com/api/v1/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an Admin");
        }
        return res.json();
      })
      .then(({ data }) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully make an admin");
          refetch();
        }
      });
  };


  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs text-white">
            Make Admin
          </button>
        ) : (
          <p>Admin</p>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
