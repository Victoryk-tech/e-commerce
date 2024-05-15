import React, { useState } from "react";
import SignUpLogo from "../../public/assets/SignUpLogo.png";

import { useNavigate } from "react-router-dom";


export const SignUp = () => {
 
  const navigate = useNavigate()
  

  const handleSubmit = (e)=>{
    e.preventDefault()
   
    navigate("/")
  }

  return (
    <div className="w-full h-full block items-center md:flex lg:items-start justify-center lg:justify-between px-4 lg:pr-24  bg-white md:pt-[4rem] lg:pt-0 ">
      <div className="hidden lg:block w-[50%] h-full">
        <img src={SignUpLogo} alt="siginup" />
      </div>

      <div className="flex flex-col items-center justify-center  pt-[4rem] md:pt-32 gap-8">
        <h1 className="text-[#00302E] text-[27px] font-[700]">
          Welcome to Lilies!
        </h1>

        <form  onSubmit={handleSubmit} 
          action="form"
          className="space-y-8 w-full flex flex-col justify-center items-start
        "
        >
          <div className="border-[1px] border-[#FBDDBB82] hover:border-[#00302E] py-4 pl-4 pr-24 rounded-[5px] text-[#00302E87]">
            <input
              type="text"
             
              placeholder="Your Name"
              className="border-none outline-none"
            />
          </div>

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
            <p className="text-bold font-[600] text-[16px] pl-[3rem]">Show</p>
          </div>

          <a className="text-[#FBDDBB] bg-[#00302E] py-4 px-[8rem] md:px-[9rem] rounded-[5px] font-[500] text-[18px]">
            SIGN UP
          </a>
        </form>
        <p className="text-[#00302E] text-[20px]">
          Already have an account?
          <a href="#" className="font-[700]">
            LOGIN
          </a>
        </p>
      </div>
    </div>
  );
};
