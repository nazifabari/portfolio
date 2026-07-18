import profilePhoto from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';



function Intro() {        
  return (
       
    <div id="home" className=" flex bg-[#8E756E]  xl:py-20 xl:px-25 2xl:px-30">

      <div className="flex-1 pt-5 md:pt-30  2xl:pt-50">

        <div className="flex text-[7px] md:text-[15px] font-semibold uppercase text-[#E8DBCC]/[0.78] items-center gap-2">
         <span className=" w-[10px] h-[0.5px]  md:w-[30px] md:h-[2px] bg-[#F4C9D6] " />  computer science · class of 2027
        </div>

        <TypeAnimation
          className="font-bold pt-[20px] text-[25px] md:text-[70px] source-code-pro-n  text-[#F4C9D6]"
          sequence={[
            'hi, i am nazifa!', 3000, 
            'welcome!', 1000, 
            'hi, i am nazifa!', 1000
          ]}
          wrapper="h1"
          cursor={true}
          speed={1}
          repeat={1}
          deletionSpeed={1}
        />

        <h2 className="text-left font-semibold cormorant-garamond-title  mt-5 md:mt-6 text-[#e8dbcc] md:text-[40px] text-[13px]" >CS @ University at Buffalo </h2>

        <p className="text-left font-sans mt-1 text-[#E8DBCC]/[0.85] leading-[1.62] text-[10px] md:text-[25px] md:w-[700px] 2xl:w-[900px] ">
          I am a computer science student at the University at Buffalo, graduating Fall 2027. 
          I enjoy building full-stack applications, from designing databases to building the interfaces
          people actually use.
        </p>



         <div className="flex gap-4 pt-[25px] md:pt-[45px] font-bold">

          <a href="#projects"  className= "hover:bg-[#79605a] border border-[#F4C9D6] hover:border-[#5C3A30] bg-[#F4C9D6] text-[#5C3A30] hover:text-[#e8dbcc] items-center px-[6px] py-[6px] md:px-[30px] md:py-[20px] text-[10px] md:text-[15px] rounded-full "
          > view my work →  </a>
      
          <a href="mailto:nazifabari@gmail.com" className= "hover:bg-[#79605a] border border-[#e8dbcc]/[0.85] hover:border-[#5C3A30] px-[6px] py-[6px] md:px-[30px] md:py-[20px] rounded-full text-[10px] md:text-[15px] text-[#e8dbcc] items-center"
          > get in touch </a>
        </div>
      </div>



        <div className="pt-[50px] md:pt-[100px] 2xl:pr-[40px]">
          <img 
          src={profilePhoto} 
          alt="profile image" 
          className=" w-[150px]  xl:w-[400px]  2xl:w-[520px]  rounded-3xl border-2 border-[#F4C9D6]  "
        />
      </div>
      
     </div>
   
    
  )
}

export default Intro
