import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="light grid place-items-center min-h-screen text-white  text-xl font-[poppins] ">
      <h1>Error page 404 !!</h1>
      <Link to="/">
        <button className="bg-gray-500 p-2 rounded-md absolute top-56 md:right-[44%] right-56 md:mt-6 ">
          Go back Home{" "}
        </button>
      </Link>
    </div>
  );
}

export default Error;
