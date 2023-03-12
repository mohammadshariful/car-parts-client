import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p className="text-center text-xl text-primary">
        please wait a few seoconds
      </p>
    </div>
  );
};

export default Loading;
