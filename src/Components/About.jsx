import React from "react";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { IoGitNetworkOutline } from "react-icons/io5";
import { BsDatabaseDown } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import "../Components/Global.css"

const About = ({bgcolor,darkmode}) => {
  return (
    <>
      <div className="relative h-full">
        <div className={`${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`} >About</h1>
          <p className="my-4  lg:text-nowrap "
           style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
          >
            I am pursuing My <span className="font-bold">B.Tech Degree </span>From R C Patel Intitute of technology Shirpur College,<br /> Shirpur, Maharashtra.
            My Specilization in <span className="font-bold">Computer Science Engineering (CSE)</span>
             
            <br />{" "}
          </p>

          <p className="lg:text-nowrap"
           style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}       
          >
            As the <span className="font-bold">MERN stack devloper</span>, I am passionate about building responsive web applications.<br /> With a strong foundation in <span className="font-bold"> MongoDB, Express.js, React, and Node.js</span>, <br />I enjoy crafting full-stack solution that deliver seamless and engaging user experiences.
            <br />
            <br />
            Through my projects, I have honed my skills in both <span className="font-bold">front-end and back-end developement</span>, <br />with a focus on<span className="font-bold"> clean design, optimized functionality, and performance</span>.<br /> I am committed to continuous learning and staying updated <br />with the latest industry trends and technologies.
            <br />
            <br />
            Eager to grow professionally, I look forward to contributing to innovative projects <br />that make a meaningful impact in the digital world. 
          </p>
          <h1 className="text-2xl my-5 font-italic"
           style={{ color: `${bgcolor==="white" ? "#000000" : "white"}`}}  
          >What I DO!</h1>

          <div className="flex gap-5 flex-wrap ">
            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <LiaSwatchbookSolid className="text-4xl my-2 text-purple-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`} 
                >Frontend Developement</h1>
                <p className="text-sm"
                 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                 With a deep understanding of <span className="font-bold">HTML, CSS, JavaScript</span>, and modern frameworks like <span className="font-bold">React</span>
                  .I transform design concepts into dynamic, user-friendly websites. 
                </p>
              </div>
            </div>

            

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#EEF5FA" :"black"}`,border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <BsDatabaseDown className="text-4xl my-2 text-blue-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`}>Backend Developement</h1>
                <p className="text-sm"
                 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                   Skilled in <span className="font-bold">Node.js, Express, MongoDB and MariaDB</span> to build secure, scalable server-side solutions that ensure efficient data management and a reliable user experience.
                </p>
              </div>
            </div>

            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <IoShieldCheckmark className="text-4xl my-2 text-green-500" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`}>Full Stack Developement</h1>
                <p className="text-sm"
                 style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                 As a passionate full-stack devloper, I bring ideas to life by crafting <span className="font-bold">dynamic web applications</span>. I seamlessly integrate stunning <span className="font-bold">front-end designs</span> with robust <span className="font-bold">back-end functionality</span>, delivering exceptional user experiences and innovative solutions.
                </p>
              </div>
            </div>


            <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{background:`${bgcolor==="white" ? "#EEF5FA" : "black"}` ,border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}>
              <div>
                <IoGitNetworkOutline className="text-4xl my-2 text-yellow-600" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className={`font-bold my-2 ${bgcolor==="white" ? "text-black" :"text-white"}`}>Git & Github</h1>
                <p className="text-sm"
                  style={{ color: `${bgcolor==="white" ? "#000000" : "#A6A6A6"}`}}
                >
                   It's used for <span className="font-bold">storing, tracking, and collaborating on software projects </span>. It makes it easy for developers to share code files.
                </p>
              </div>
            </div>


          </div>
        </div>

        
      </div>
    </>
  );
};

export default About;
