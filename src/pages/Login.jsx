import Logo from "../assets/Netflix_2015_logo.svg";
import bg from "../assets/EG-en-20221128-popsignuptwoweeks-perspective_alpha_website_l.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [formData, setFormData] = useState({ username: ``, password: `` });
  function handleLogIn() {
    if (formData.username && formData.password) {
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("username", formData.username);
      window.location.hash = "/";
      window.location.reload();
    } else {
      alert("Please Enter Username & Password");
    }
  }
  function handleForm(e) {
    let ele = e.target;
    setFormData((e) => {
      return {
        ...e,
        [ele.name]: ele.value,
      };
    });
  }
  return (
    <div
      className="bg-cover max-sm:h-screen"
      style={{ backgroundImage: `url("${bg}")` }}
    >
      <div className="bg-[#00000097] max-sm:bg-black max-sm:h-screen relative flex flex-col items-center w-full">
        <header className="p-8 navBgNo w-full max-sm:p-4">
          <img src={Logo} alt="Logo" className="h-12 max-sm:h-6" />
        </header>
        <div className="flex max-sm:w-screen max-sm:mb-auto max-sm:p-7 items-center max-sm:mt-8 justify-start flex-col bg-[#000000b6] p-14 gap-8">
          <h1 className="text-white self-start text-4xl font-bold">Sign In</h1>
          <input
            onChange={(e) => handleForm(e)}
            type="text"
            name="username"
            placeholder="Username"
            className="w-80 max-sm:w-full h-12 bg-[#333] text-white indent-6 rounded-sm"
            value={formData.email}
          />
          <input
            onChange={(e) => handleForm(e)}
            type="password"
            name="password"
            placeholder="Password"
            className="w-80 max-sm:w-full h-12 bg-[#333] text-white indent-6 rounded-sm"
            value={formData.password}
          />
          <button
            onClick={handleLogIn}
            className="w-80 max-sm:w-full h-12 bg-[#e50914] flex justify-center items-center font-bold rounded-sm text-white"
          >
            Sign In
          </button>

          <div className="flex w-full justify-start items-center">
            <input
              type="checkbox"
              className="accent-[#b3b3b3] w-4 mr-2"
              name="remember"
              id="Remember"
            />
            <label htmlFor="Remember" className="text-[#b3b3b3] mr-auto">
              remember Me?
            </label>
            <a href="" className="text-[#b3b3b3] hover:underline">
              Need help?
            </a>
          </div>
          <div>
            <p className="text-[#737373]">
              New to Netflix?{" "}
              <Link to="/SignUp" className="text-white">
                Sign up now
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="hidden max-sm:block p-6 w-full text-left border-t border-x-[#737373]">
          <a href="" className="text-[#737373] w-full">
            Questions? Contact us.
          </a>
        </div>
        <footer className="bg-[#000000b6] mt-20 w-full max-sm:hidden p-10 gap-32 max-sm:gap-2 text-[#737373] flex justify-center items-center relative bottom-0">
          <div className="flex flex-col gap-8 max-sm:gap-4 p-2">
            <a href="">Questions? Contact us.</a>
            <a href="">FAQ</a>
            <a href="">cookie Prefrences</a>
            <select name="language" id="language" className="bg-black ">
              <option value="EN" defaultValue>
                English
              </option>
              <option value="AR">العربية</option>
            </select>
          </div>
          <div className="flex flex-col gap-8 p-2">
            <a href="">Help Center</a>
            <a href="">Corporate Information</a>
          </div>
          <a href="">Terms of Use</a>
          <a href="">Privacy</a>
        </footer>
      </div>
    </div>
  );
}
