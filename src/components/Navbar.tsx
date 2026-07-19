import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Navbar(){

return (




<div className= "bg-[#79605a]  fixed top-0 w-full">

<nav className = "flex p-3 font-semibold font-sans text-[#e8dbcc] text-[12px] md:text-lg justify-between items-center">
        <h1 className="tracking-[0.1em] tangerine-bold italic text-[15px] md:text-[30px] text-[#F4C9D6] "     >NB</h1>

  <div className= " flex md:gap-10 gap-4">
 <a href="#home">home</a>
 <a href="#about">about</a>
<a href="#skills">skills</a>
 <a href="#projects">projects</a>
   </div>
 
 
 <div  className="flex p-2 md:gap-2 gap-1"  >
    <a  href="https://www.linkedin.com/in/nzfa/">  <FaLinkedin className = "text-[#e8dbcc] text-[20px] md:text-[35px]" /></a>
    <a href="https://github.com/nazifabari"><FaGithub className = "text-[#e8dbcc] text-[20px] md:text-[35px] " />   </a>   </div>



</nav>










</div>






)









}

export default Navbar
