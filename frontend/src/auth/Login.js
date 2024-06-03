import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUserArray } from "../app/features/user/UserSlice";
import axios from 'axios'
const Login = () => {
  const dispatch = useDispatch();
  const userArray = useSelector(selectUserArray);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post('http://localhost:3001/validatePassword', {
      email: formData.email,
      password: formData.password,
    })
    .then(res => {
      if (res.data.validation) {
        dispatch(loginUser(formData.email));
      } else {
        setError("Invalid email or password");
      }
    })
    .catch(error => {
      console.error("Error validating password:", error);
      setError("An error occurred while validating password. Please try again.");
    });
  };
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                className="block w-full  border-2 border-gray-500 py-1.5 text-gray-900 focus:ring-blue-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                onChange={handleChange}
                autoComplete="current-password"
                className="block w-full  border-2 border-gray-500 py-1.5 text-gray-900 sm:text-sm"
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-3 mr-3"
                onClick={togglePasswordVisibility}
              >
                {!show ? (
                  <FiEyeOff className="text-blue-500" />
                ) : (
                  <FiEye className="text-blue-500" />
                )}
              </button>
            </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center  bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
            
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
