import { C } from "@dev.icons/react";
import { Mysql } from "@dev.icons/react";
import { Postgresql } from "@dev.icons/react";
import { SiPydantic } from "react-icons/si";
import { _React } from "@dev.icons/react";
import Skills from './Skills'
// import { TypeAnimation } from 'react-type-animation';
// import { useState, useEffect, useRef } from 'react'


function About(){

  // const [isVisible, setIsVisible] = useState(false)
  // const aboutRef = useRef(null)

//   useEffect(() => {
//  const observer = new IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting) {
//       setIsVisible(true)
//     }
//   }, { threshold: 0.3 })

//   if (aboutRef.current) {
//     observer.observe(aboutRef.current)
//   }

//   return () => observer.disconnect()
// }, [])


return(
  <div   className= " bg-[#8E756E] px-5 2xl:px-30 xl:px-25 md:pt-10 pt-5">
        <div className=" border-b-1 md:border-b-2 border-[#FFFFFF]/[0.10]  w-full"></div>

    <div id="about"  className="">
     <h2 className="uppercase tracking-[0.2em] text-[#e8dbcc]/[0.80] font-semibold pt-10 md:pt-13 md:text-[12px] xl:text-[15px] text-[10px] ">background</h2>
           <h1 className= "font-bold cormorant-garamond-title text-[40px]  md:text-[60px] xl:text-[75px] italic text-[#F4C9D6]  ">
            about me
          </h1>

    {/* <div className=" max-w-6 md:max-w-15 border-b-2 md:border-b-8 border-pink-200  w-full"></div> */}
      {/* {isVisible && 
        <TypeAnimation
          className="text-center font-sans text-[#e8dbcc]   text-[13px]  md:text-[25px]  w-full  pt-[20px] "
          sequence={[
            "I'm driven by building software that makes a real difference in people's lives. I believe in hands-on learning. I love learning new tools, concepts, and skills by jumping into projects and learning as I go. In my free time, you'll find me at the gym or with my nose in a book :)", 
            1000
          ]}
          wrapper="p"
          cursor={true}
          speed={1}
          repeat={1}
          deletionSpeed={1}
        />
      } */}

      <p className="text-center font-sans text-[#e8dbcc] text-[15px] md:text-[20px] xl:text-[25px] xl:px-10 w-full md:pt-[15px] pt-[7px] " 
      >I'm driven by building technology that makes people's lives easier and more accessible. 
      A proud Dean's List student passionate about full stack and frontend development. 
      I believe the best way to learn is by doing, jumping into real projects and picking up new tools along the way. 
      In my free time you'll find me at the gym or with my nose in a book.</p>

    </div>

        <div className="border-b-1 md:border-b-2 border-[#FFFFFF]/[0.10] md:pt-25 pt-12 w-full"></div>


    <div id = "skills" className= "pt-10">

        {/* <div className=" flex-col flex items-center"> */}
          
          <h2 className="uppercase tracking-[0.2em] text-[#e8dbcc]/[0.80] font-semibold  md:text-[12px] xl:text-[15px] text-[10px] ">technical skills</h2>
           <h1 className= "font-bold  cormorant-garamond-title text-[40px] md:text-[60px] xl:text-[75px] italic text-[#F4C9D6]  ">
            languages & tools
          </h1>


         {/* <div className=" max-w-6 md:max-w-15 border-b-2 md:border-b-8 border-pink-200 w-full"></div> */}
        {/* </div> */}

    <div className="flex flex-wrap gap-3.5 md:gap-5 md:pt-[40px]  pt-[20px] justify-center">
        <Skills icon={<C className="w-4 h-4 md:w-8 md:h-8 " /> } name="C" />
        <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className=" w-4 h-4    md:w-8 md:h-8"/>} name="Python"/>
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="md:w-8 md:h-8  w-4 h-4   " />} name="Java" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="md:w-8 md:h-8  w-4 h-4   " />} name="JavaScript" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="TypeScript" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="HTML" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="md:w-8 md:h-8 w-4 h-4  "/>} name="CSS" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="md:w-8 md:h-8 w-4 h-4" />} name="Tailwind" />
        <Skills icon={<Mysql className="w-4 h-4 md:w-8 md:h-8 " />} name="MySQL" />
        <Skills icon={<Postgresql className="w-4 h-4 md:w-8 md:h-8 "/>} name="PostgreSQL" />
        <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="SQLAlchemy" />
        <Skills icon={<SiPydantic className="w-4 h-4 md:w-8 md:h-8 " />} name="Pydantic" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="FastAPI" />
        <Skills icon={<_React className="w-4 h-4 md:w-8 md:h-8 "/>} name="React" />

    </div>


    </div>

    </div>



)



}
export default About