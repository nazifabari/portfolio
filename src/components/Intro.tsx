import profilePhoto from '../assets/profile.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';




function Intro() {        
  return (
  
  <div className= "flex bg-[#8E756E] h-screen">
  
  <div>
    <img src={profilePhoto} alt="profile image" className="w-130 m-10 ml-35 mt-30 rounded-3xl"/>
    </div>
    
    <div className="flex-1" >


      <TypeAnimation
      className= "font-bold text-9xl font-sans text-[#F4C9D6] mt-75 ml-8 tracking-widest"
      sequence={[
        'hi, i am nazifa!' , 3000, 'welcome!', 1000, 'hi, i am nazifa!', 1000
      ]}
      wrapper="h1"
      cursor={true}
      speed ={1}
      repeat={1}
      deletionSpeed ={1}
    />




      <p className= "text-left font-semibold font-sans ml-10 mr-35 mt-8 text-[#e8dbcc] text-2xl/9"> I am a computer science student at the University at Buffalo, graduating Fall 2027. I enjoy building full-stack applications, from designing databases to crafting the interfaces people actually use.</p>
      
    
      <div  className="flex flex-1 ml-10 mr-100 mt-10"  >   <a  href="https://www.linkedin.com/in/nzfa/">  <FaLinkedin className = "text-[#F4C9D6]" size={70}/></a>    
      
        <a href="https://github.com/nazifabari"><FaGithub className = "text-[#F4C9D6] ml-4" size={70}/>   </a>   </div>

 
    
      
      </div>
      
      </div>
  )
}

export default Intro
