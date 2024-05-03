import React from "react";
import LoginLogo from "../../public/assets/LoginLogo.png";

export const LogIn = () => {
  return (
    <div className="w-full h-[100vh] flex items-start justify-between pr-24  bg-white">
      <div className="w-[50%] h-full">
        <img src={LoginLogo} alt="siginup" />
      </div>

      <div className="flex flex-col items-center justify-center md:pt-32 gap-8">
        <h1 className="text-[#00302E] text-[27px] font-[700]">Welcome Back!</h1>

        <form action="" className="space-y-8 w-full">
          <div className="border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-24 rounded-[5px] text-[#00302E87]">
            <input
              type="Email"
              placeholder="gregwill@gmail.com"
              className="border-none outline-none"
            />
          </div>
          <div className="flex justify-between text-center border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-4 rounded-[5px] text-[#00302E87]">
            <input
              type="password"
              placeholder="Your Password"
              className="border-none outline-none"
            />
            <p className="text-bold font-[600] text-[16px] pl-[4rempx]">Show</p>
          </div>

          <button className="text-[#FBDDBB] bg-[#00302E] py-4  px-[11rem] rounded-[5px] font-[500] text-[18px]">
            LOG IN
          </button>
        </form>
        <div className="flex items-start justify-start space-x-[12rem] text-[#00302EE8]">
          <a href="#">Create an account</a>
          <a href="#">forgot password</a>
        </div>
      </div>
    </div>
  );
};
