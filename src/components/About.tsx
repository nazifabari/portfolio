import { C } from "@dev.icons/react";
import { Mysql } from "@dev.icons/react";
import { Postgresql } from "@dev.icons/react";
import { SiPydantic } from "react-icons/si";
import Skills from './Skills'
import { TypeAnimation } from 'react-type-animation';


function About(){

return(
  <div  id="about"  className= "flex bg-[#8E756E] px-5 md:px-30 py-5 md:py-30 gap-20 ">

    <div>
    <h1 className= "font-bold text-[23px] md:text-6xl italic text-[#F4C9D6] text-left">
                about me
    </h1>

    <div className="max-w-15 border-b-8 border-pink-200 pt-[35px] w-full"></div>

        <TypeAnimation
          className="text-left font-sans text-[#e8dbcc] text-[30px] w-[600px] pt-[25px] "
          sequence={[
            "I'm driven by building software that makes a real difference in people's lives. In my free time, you'll find me at the gym or with my nose in a book :)", 
            3000
          ]}
          wrapper="p"
          cursor={true}
          speed={1}
          repeat={1}
          deletionSpeed={1}
        />

    {/*note: make animation happen only when about is clicked or scrolled up on 
    <p className= " text-left font-sans text-[#e8dbcc] text-[30px] w-[500px] pt-[25px] "> 
         I'm driven by building software that makes a real difference in people's lives.
          In my free time, you'll find me at the gym or with my nose in a book :)</p> */}

    </div>

    <div className= "border border-pink-200 max-w-[0px] h-[400px]"></div>


    <div className= " ">
        
        <div>
           <h1 className= "font-bold text-6xl italic text-[#F4C9D6] text-left ">
            languages and frameworks
        </h1>

    <div className="max-w-15 border-b-8 border-pink-200 pt-[35px] w-full"></div>

    <div className="flex flex-wrap gap-5 pt-[35px] ]">
        <Skills icon={<C size={25} /> } name="C" />
        <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-8 h-8"/>} name="Python"/>
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-8 h-8" />} name="Java" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-8 h-8" />} name="JavaScript" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-8 h-8" />} name="TypeScript" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-8 h-8" />} name="HTML" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-8 h-8" />} name="CSS" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-8 h-8" />} name="Tailwind" />
        <Skills icon={<Mysql size={25} />} name="MySQL" />
        <Skills icon={<Postgresql size={25} />} name="PostgreSQL" />
        <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" className="w-8 h-8" />} name="SQLAlchemy" />
        <Skills icon={<SiPydantic  size={25} />} name="Pydantic" />
        <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className="w-8 h-8"  />} name="FastAPI" />
    </div>


    </div>

    </div>

    </div>


)



}
export default About