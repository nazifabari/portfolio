import { C } from "@dev.icons/react";
import { Mysql } from "@dev.icons/react";
import { Postgresql } from "@dev.icons/react";
import { SiPydantic } from "react-icons/si";
import { _React } from "@dev.icons/react";
import Skills from './Skills'
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect, useRef } from 'react'


function About(){

  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
 const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, { threshold: 0.3 })

  if (aboutRef.current) {
    observer.observe(aboutRef.current)
  }

  return () => observer.disconnect()
}, [])


return(
  <div ref={aboutRef} id="about"  className= "flex bg-[#8E756E] px-5 2xl:px-35 xl:py-25 xl:px-20 gap-20">

    <div>
    <h1 className= "font-bold text-[20px] md:text-[75px] cormorant-garamond-title  italic text-[#F4C9D6] text-left">
                about me
    </h1>

    <div className=" max-w-6 md:max-w-15 border-b-2 md:border-b-8 border-pink-200  w-full"></div>
      {isVisible && 
        <TypeAnimation
          className="text-left font-sans text-[#e8dbcc]   text-[13px]  md:text-[25px]  w-[120px]  md:w-[500px] 2xl:w-[700px] pt-[40px] "
          sequence={[
            "I'm driven by building software that makes a real difference in people's lives. I believe in hands-on learning. I love learning new tools, concepts, and skills by jumping into projects and learning as I go. In my free time, you'll find me at the gym or with my nose in a book :)", 
            3000
          ]}
          wrapper="p"
          cursor={true}
          speed={1}
          repeat={1}
          deletionSpeed={1}
        />
      }
    {/*note: make animation happen only when about is clicked or scrolled up on 
    <p className= " text-left font-sans text-[#e8dbcc] text-[30px] w-[500px] pt-[25px] "> 
         I'm driven by building software that makes a real difference in people's lives.
          In my free time, you'll find me at the gym or with my nose in a book :)</p> */}

    </div>

    <div className= "border border-pink-200 max-w-[0px] h-[300px] mt-[50px] md:mt-[50px] md:h-[400px]"></div>


    <div className= " ">
        
        <div>
           <h1 className= "font-bold  cormorant-garamond-title text-[20px] md:text-[75px] italic text-[#F4C9D6]  ">
            languages & tools
        </h1>

    <div className=" max-w-6 md:max-w-15 border-b-2 md:border-b-8 border-pink-200 w-full"></div>

    <div className="flex flex-wrap gap-1 pt-[25px] md:gap-5 md:pt-[50px] justify-center">
        <Skills icon={<C size={30} /> } name="C" />
        <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className=" w-4 h-4    md:w-8 md:h-8"/>} name="Python"/>
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="md:w-8 md:h-8  w-4 h-4   " />} name="Java" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="md:w-8 md:h-8  w-4 h-4   " />} name="JavaScript" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="TypeScript" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="HTML" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="md:w-8 md:h-8 w-4 h-4  "/>} name="CSS" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="md:w-8 md:h-8 w-4 h-4" />} name="Tailwind" />
        <Skills icon={<Mysql size={35} />} name="MySQL" />
        <Skills icon={<Postgresql size={30} />} name="PostgreSQL" />
        <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="SQLAlchemy" />
        <Skills icon={<SiPydantic size={30} />} name="Pydantic" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="md:w-8 md:h-8 w-4 h-4  " />} name="FastAPI" />
        <Skills icon={<_React size={30} />} name="React" />

    </div>


    </div>

    </div>

    </div>


)



}
export default About