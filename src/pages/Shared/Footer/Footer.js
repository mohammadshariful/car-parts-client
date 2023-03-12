import React from "react";
import { BsFacebook, BsFillChatLeftTextFill } from "react-icons/bs";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import {
  MdEmail,
  MdFeedback,
  MdLocalPhone,
  MdLocationOn,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Comapany from "../../../assets/icons/logo.png";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="p-10 bg-base-200 text-base-content">
      <div className="footer ">
        <div>
          <span className="footer-title">Contact Us</span>
          <ul className="cursor-pointer">
            <li className="flex items-center mb-2">
              <MdLocationOn className="text-2xl text-red-300" />
              <div className="ml-2">
                <p className="font-bold">Address </p>
                <span>4800 Industrial Blvd. Door # 43-45 Peru, IL 61354</span>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <MdLocalPhone className="text-2xl text-green-300" />
              <div className="ml-2">
                <p className="font-bold">Phone Number </p>
                <span>1-866-529-0412</span>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <MdEmail className="text-xl text-green-300" />
              <span className="ml-2">Email Us</span>
            </li>
            <li className="flex items-center mb-2">
              <BsFillChatLeftTextFill className="text-xl text-green-300" />
              <span className="ml-2">Live Chat</span>
            </li>
            <li className="flex items-center mb-2">
              <MdFeedback className="text-xl text-red-400" />
              <span className="ml-2">Website Feedback</span>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Customer Service</span>
          <Link className="link link-hover" to="/">
            FAQ
          </Link>
          <Link className="link link-hover" to="/">
            Returns
          </Link>
          <Link className="link link-hover" to="/">
            Retrieve Quote
          </Link>
          <Link className="link link-hover" to="/">
            Coupons
          </Link>
          <Link className="link link-hover" to="/">
            Shipping Policy
          </Link>
          <Link className="link link-hover" to="/">
            Return Policy
          </Link>
        </div>
        <div>
          <span className="footer-title">About Us</span>
          <Link className="link link-hover" to="/">
            Company Info
          </Link>
          <Link className="link link-hover" to="/">
            Press Releases
          </Link>
          <Link className="link link-hover" to="/">
            Careers
          </Link>
          <Link className="link link-hover" to="/">
            Reviews
          </Link>
          <Link className="link link-hover" to="/">
            Investor Relations
          </Link>
        </div>
        <div>
          <span className="footer-title">Blog</span>
          <Link className="link link-hover" to="/">
            In the Garage Home
          </Link>
          <Link className="link link-hover" to="/">
            Auto Repair 101
          </Link>
          <Link className="link link-hover" to="/">
            DIY Guides
          </Link>
          <Link className="link link-hover" to="/">
            OBD-II Trouble Codes
          </Link>
          <Link className="link link-hover" to="/">
            Automotive Features
          </Link>
        </div>
        <div>
          <span className="footer-title">Catalogs</span>
          <Link className="link link-hover" to="/">
            Al Marks
          </Link>
          <Link className="link link-hover" to="/">
            All Parts
          </Link>
          <Link className="link link-hover" to="/">
            All Brands
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row mt-4 gap-4">
        <div className="lg:w-96">
          <div className="flex items-center flex-wrap">
            <img className="w-16" src={Comapany} alt="conpany" />
            <h2 className="text-2xl">Proper Parts Industry</h2>
          </div>
          <p>
            A company can be created as a legal person so that the company
            itself has limited liability as members perform or fail to discharge
            their duty according to the publicly declared incorporation, or
            published policy.
          </p>
        </div>
        <div className="cursor-pointer">
          <div className="grid grid-flow-col gap-4">
            <li className="list-none text-2xl">
              <FaTwitter className="text-blue-400" />
            </li>
            <li className="list-none text-2xl">
              <FaYoutube className="text-red-500" />
            </li>
            <li className="list-none text-2xl">
              <BsFacebook className="text-blue-600" />
            </li>
          </div>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control lg:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-center mt-4">
        <p>
          Copyright &copy; {fullYear} - All right reserved by Proper Parts
          Industries Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
