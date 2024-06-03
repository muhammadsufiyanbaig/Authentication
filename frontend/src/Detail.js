import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectLoggedInUser } from "./app/features/user/UserSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectLoggedInUser);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/signup'); 
  };
  return (
    <div>
      {loggedInUser && (
        <div className="bg-white flex flex-col items-center justify-center h-screen">
          <div className="p-10 bg-gray-100 shadow-lg">
            <h1 className="font-bold text-4xl text-gray-900 mb-4">Welcome!</h1>
            <div>
              <p className="font-bold text-lg text-blue-500 mt-4">Your Name:</p>
              <div className="p-2 bg-gray-200">
                <p className="text-md text-gray-900">
                  {loggedInUser.details.name}
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg text-blue-500 mt-4">
                Your Email:
              </p>
              <div className="p-2 bg-gray-200">
                <p className="text-md text-gray-900">
                  {loggedInUser.details.email}
                </p>
              </div>
            </div>
            <div>
            <div>
              <button
                onClick={handleLogout}
                className="mt-4 w-full text-center border-2 border-blue-500 font-semibold leading-6 text-blue-500 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out" 
              >
                Logout
              </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
