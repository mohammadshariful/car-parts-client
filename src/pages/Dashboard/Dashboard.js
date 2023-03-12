import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaProductHunt, FaUserCircle, FaUsersCog } from "react-icons/fa";
import {
  MdBookmarkBorder,
  MdOutlineBookmarkBorder,
  MdProductionQuantityLimits,
  MdStarBorder,
} from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";
import TitleChange from "../Shared/TitleChange/TitleChange";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <TitleChange
        title="
      Dashboard"
      />
      <div className="drawer overflow-auto drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content w-[90%] mx-auto my-10">
          <h2 className="text-2xl text-center text-primary mb-4">
            Welcome To -|
            <span className="text-success text-2xl lg:text-3xl">
              {user?.displayName}
            </span>
            |- DashBoard
            <hr />
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">
                    <MdOutlineBookmarkBorder className="text-primary" />
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/review">
                    <MdStarBorder className="text-primary" /> Add A Review
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/profile">
                <FaUserCircle className="text-primary" />
                My Profile
              </Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/manageOrder">
                    <MdBookmarkBorder className="text-primary" />
                    Manage All Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">
                    <FaProductHunt className="text-primary" /> Add A Product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/admin">
                    <FaUsersCog className="text-primary" /> Make Admin
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">
                    <MdProductionQuantityLimits className="text-primary" />
                    Manage Products
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
