import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Navbar(){

return (




<div className= "bg-[#8E756E] fixed top-0 w-full">

<nav className = "gap-8 flex p-5 font-semibold font-sans text-[#e8dbcc] text-lg justify-between">

    <div className= " flex gap-8">
 <a href="#home">home</a>
 <a href="http://localhost:5173/#about">about</a>
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
