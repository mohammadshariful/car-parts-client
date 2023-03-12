import React from "react";
import NotFoundImg from "../../assets/images/not-found.gif";
const NotFound = () => {
  return (
    <div className="w-full">
      <img
        className="xs:max-w-xs lg:w-full lg:h-[90vh] "
        src={NotFoundImg}
        alt="not found img"
      />
    </div>
  );
};

export default NotFound;
