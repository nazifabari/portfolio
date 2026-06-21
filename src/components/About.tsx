
import Skills from './Skills'
function About(){

return(
  <div className= "flex bg-[#8E756E] w-full flex-col px-[25vh] pt-[4vh] ">

    <h1 className= "font-bold text-6xl italic text-[#F4C9D6] text-left">
                about me
    </h1>

    <div className="max-w-15 border-b-8 border-pink-200 pt-[3vh] w-full"></div>


<p className= "text-left font-sans pt-[5vh] text-[#e8dbcc] text-[25px]"> 
         I'm driven by building software that makes a real difference in people's lives.
          In my free time, you'll find me at the gym or with my nose in a book :)</p>


    <div className= "flex-1">
        
        <div>
           <h1 className= "font-bold text-6xl italic text-[#F4C9D6] text-left pt-[10vh]">
            skills & technologies
        </h1>

            <div className="max-w-15 border-b-8 border-pink-200 pt-[3vh] w-full"></div>


      <div className="flex flex-wrap gap-5 pt-[7vh] px-[5vh]">
    <Skills icon= {<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-9 h-9"/>} name="Python"/>
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-9 h-9" />} name="Java" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className="w-9 h-9 bg-[#4054BD]" />} name="C" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-9 h-9" />} name="Tailwind" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-9 h-9" />} name="JavaScript" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-9 h-9" />} name="HTML" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-9 h-9" />} name="CSS" />
    <Skills icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-9 h-9" />} name="TypeScript" />

    </div>









    </div>

        </div>

    </div>


)



}
export default About