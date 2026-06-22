
import Skills from './Skills'
function About(){

return(
  <div className= "flex bg-[#8E756E] w-full flex-col px-[15vh] pt-[4vh] ">

    <h1 className= "font-bold text-6xl italic text-[#F4C9D6] text-left">
                about me
    </h1>

    <div className="max-w-15 border-b-8 border-pink-200 pt-[3vh] w-full"></div>


<p className= "text-left font-sans pt-[5vh] text-[#e8dbcc] text-[clamp(20px,2.1vw,28px)]  max-w-[58vw]"> 
         I'm driven by building software that makes a real difference in people's lives.
          In my free time, you'll find me at the gym or with my nose in a book :)</p>


    <div className= "flex-1">
        
        <div>
           <h1 className= "font-bold text-6xl italic text-[#F4C9D6] text-left pt-[20vh]">
            skills & technologies
        </h1>

            <div className="max-w-15 border-b-8 border-pink-200 pt-[3vh] w-full"></div>


      <div className="flex flex-wrap gap-4 pt-[4vh] ]">
    <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-7 h-7"/>} name="Python"/>
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-7 h-7" />} name="Java" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className="w-7 h-7 bg-[#4054BD]" />} name="C" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-7 h-7" />} name="JavaScript" />
     <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-7 h-7" />} name="TypeScript" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-7 h-7" />} name="HTML" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-7 h-7" />} name="CSS" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-7 h-7" />} name="Tailwind" />


    </div>









    </div>

        </div>

    </div>


)



}
export default About