import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import placeholderImg from "../../assets/images/placeholderImg.jpeg";
import auth from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {

  const [user] = useAuthState(auth);
  const [update, setUpdate] = useState(false);
  const url = `https://proper-parts-server-74zj.onrender.com/api/v1/profile/${user?.email}`;

  const { data: { data: profile = {} } = {}, isLoading, refetch } = useQuery(["profile", user?.email], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="card w-full lg:max-w-xl bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title">I'm {user?.displayName}</h2>
        <div>
          <div className="avatar online">
            <div className=" w-12 lg:w-16 rounded-full">
              <img src={user?.photoURL || placeholderImg} alt="user-avatar" />
            </div>
          </div>
        </div>
        <p>
          <span className="font-bold">Email</span> :
          <span className="text-sm pl-1">{user?.email}</span>
        </p>
        <p>
          <span className="font-bold">Eduction</span> :
          <span className="text-sm pl-1">
            {profile?.education ? profile?.education : " ......."}
          </span>
        </p>
        <p>
          <span className="font-bold">City</span> :
          <span className="text-sm pl-1"> {profile?.city ? profile?.city : " ......."}</span>
        </p>
        <p>
          <span className="font-bold">Phone No.</span> :
          <span className="text-sm pl-1">
            {profile?.phone ? profile?.phone : " ......."}
          </span>
        </p>
        <p>
          <span className="font-bold">LinkedIn</span> :
          <span className="text-sm pl-1"> {profile?.link ? <a className="text-blue-600 underline" href={profile?.link}>Go to link</a> : " ......."}</span>
        </p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setUpdate(true)}
            htmlFor="updateProfileModal"
            className="btn btn-sm btn-success text-white modal-button"
          >
            Update Profile
          </label>
        </div>
      </div>
      {update && <UpdateProfile refetch={refetch} setUpdate={setUpdate} />}
    </div>
  );
};

export default MyProfile;
