import React from "react";

export const Notify = () => {
  return (
    <div className="md:py-44 md:px-20">
      <div className="md:flex items-start justify-between w-full">
        <div className="">
          <h1 className="text-[#FBDDBB] text-[28px] font-[700]">
            Get notified when we update!
          </h1>
          <p className="text-[16px] pr-9">
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>

        <div className="flex items-center justify-center text-center gap-2">
          <form
            action=""
            className="bg-white h-10 px-3 md:px-6 flex items-center text-center"
          >
            <input
              className="text-[#B3B3B3] text-center outline-none"
              type="Email"
              placeholder="gregwill@gmail.com"
              name="email"
            />
          </form>
          <button className="bg-[#FBDDBB] text-[#00302E]  md:py-1 px-1 md:px-5 rounded-sm h-10">
            Get notified
          </button>
        </div>
      </div>
    </div>
  );
};
