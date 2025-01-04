import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "../Components/Global.css";
import {assets} from '../Components/SocialLinks/assets'


const Projects = ({bgcolor,darkmode}) => {
  return (
    <>
      {/* <div className="p-3"> */}
        <div className={`padding-inner ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} lg:p-10 md:p-10 p-4 rounded-lg`}>
          <h1 className={`text-3xl lg:ml-0 md:ml-0 sm:ml-4 font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Projects</h1>

          <div className="flex gap-5 flex-wrap my-5">


          <a  target="_blank" href="https://doctor-appointment-mern.netlify.app/">
            <div
              className="ui-ux-design lg:w-80 md:w-80 sm:w-[300px] flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={assets.doctor_project}
                className="rounded-lg transition delay-150"
              />
              <div>
                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Doctor's Appointment (Reactjs, Tailwind, Expressjs, Nodejs, Mongodb)</h1>
              </div>
            </div>
          </a>


          <a target="_blank" href="https://forever-e-commerce.netlify.app/">
            <div
              className="ui-ux-design lg:w-80 md:w-80 sm:w-[300px] flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={assets.ecommerce_project}
                className="rounded-lg transition delay-150"
              />
              <div>
                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>E-commerce Website (Reactjs, Tailwind, Expressjs, Nodejs, Mongodb)</h1>
              </div>
            </div>
          </a>

          <a target="_blank" href="https://forever-ecommerce-static.netlify.app/">
            <div
              className="ui-ux-design lg:w-80 md:w-80 sm:w-[300px] flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={assets.ecommerce_project}
                className="rounded-lg transition delay-150"
              />
              <div>
                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>E-commerce Website only Frontend (JavaScript, Reactjs, Tailwind)</h1>
              </div>
            </div>
          </a>


            <a target="_blank" href="https://cv-genie.netlify.app/">
            <div
              className="ui-ux-design lg:w-80 md:w-80 sm:w-[300px] flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={assets.resume_builder_project}
                className="rounded-lg transition delay-150"
              />
              <div>
                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Resume Builder Project (javascript, Reactjs, redux, tailwind)</h1>
              </div>
            </div>
            </a>


            <a target="_blank" href="https://portfolio-dinesh-bharati.netlify.app/">
            <div
              className="ui-ux-design lg:w-80 md:w-80 sm:w-[300px] flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={assets.portfolio_project}
                className="rounded-lg transition delay-150"
              />
              <div>
                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Portfolio Website (javascript, Reactjs, Tailwind)</h1>
              </div>
            </div>
            </a>

          </div>
        </div>
          
      {/* </div> */}
    </>
  );
};

export default Projects;
