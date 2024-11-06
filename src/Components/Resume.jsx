import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import "../Components/Global.css";
import { assets } from "./SocialLinks/assets";

const Resume = ({bgcolor,darkmode}) => {
  return (
    <>
      {/* <div className="about p-3 "> */}
        <div className={` ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1  className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`} >Resume</h1>

          <img src={assets.resume_png} alt="" />

          <div className="flex justify-center relative ">
            <button className="bg-blue-500 flex items-center rounded-lg justify-center text-white p-2 text-md text-nowrap w-36 h-10">
              <a href={assets.resume} download="Resume" className="flex">
                <MdOutlineFileDownload className="text-2xl" />
                Resume
              </a>
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Resume;
