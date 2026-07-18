import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Navbar(){

return (




<div className= "bg-[#79605a] border-b border-[#79605a]/[0.85] fixed top-0 w-full">


<nav className = "gap-8 flex p-4 font-semibold font-sans text-[#e8dbcc] text-xs md:text-lg justify-between">
        <h1 className="tracking-[0.1em] tangerine-bold italic text-[30px] md:text-[30px] text-[#F4C9D6] "     >NB</h1>

    <div className= " flex gap-8 pt-[6px] pl-[5px]">
 <a href="#home">home</a>
 <a href="#about">about</a>
<a href="#skills">skills</a>
 <a href="#projects">projects</a>
   </div>
 
 
 <div  className="flex"  >
    <a  href="https://www.linkedin.com/in/nzfa/">  <FaLinkedin className = "text-[#e8dbcc]" size={50}/></a>
    <a href="https://github.com/nazifabari"><FaGithub className = "text-[#e8dbcc] ml-4" size={50}/>   </a>   </div>



</nav>










</div>






)









}

export default Navbar
