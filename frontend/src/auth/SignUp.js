import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../app/features/user/UserSlice';
import { selectUserArray,  } from "../app/features/user/UserSlice";

const SignUp = () => {
  const userArray = useSelector(selectUserArray);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all fields before submitting");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    const userObject = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    await dispatch(addUser(userObject));
    navigate('/detail');
    const user = userArray.find((u) => u.details.email === formData.email);
if (user) {
  setError("Email is already registered")
}
  };

  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  const togglePasswordVisibility1 = () => {
    setShow1(!show1);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
          alt="Your Company"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          SignUp to create your account
        </h2>
      </div>
      <div
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleSubmit}
      >
        <form className="space-y-3" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type={"text"}
                autoComplete={"text"}
                value={formData.name}
                onChange={handleChange}
                className="block w-full  border-2 border-gray-500 py-1.5 text-gray-900 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
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
                type={"email"}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full  border-2 border-gray-500 py-1.5 text-gray-900 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
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
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword" 
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2 relative">
              <input
                id="confirmPassword" 
                name="confirmPassword" 
                type={show1 ? "text" : "password"}
                autoComplete="current-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full border-2 border-gray-500 py-1.5 text-gray-900 sm:text-sm"
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-3 mr-3"
                onClick={togglePasswordVisibility1}
              >
                {!show1 ? (
                  <FiEyeOff className="text-blue-500" />
                ) : (
                  <FiEye className="text-blue-500" />
                )}
              </button>
            </div>
          </div>
          <div>
          {passwordMatchError && (
            <p className="text-red-500">Passwords must be match.</p>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center  bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Create your account
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
