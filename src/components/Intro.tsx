import profilePhoto from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';



function Intro() {        
  return (
       
    <div id="home" className="flex bg-[#8E756E] px-5 md:px-30 py-20 md:py-20 ">

      <div className="flex-1 pt-5 md:pt-40 ">

        <div className="flex text-[6px] md:text-[13px] md:pb-[2px]  pb-[7px] font-semibold uppercase text-[#E8DBCC]/[0.78] items-center gap-2">
         <span className=" w-[10px] h-[0.5px]  md:w-[26px] md:h-[1.5px] bg-[#F4C9D6]" />  computer science · class of 2027
        </div>

        <TypeAnimation
          className="font-bold text-[23px] md:text-[100px] italic text-[#F4C9D6]"
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

        <h2 className="text-left font-semibold font-sans mt-2 md:mt-5 text-[#e8dbcc] md:text-[40px] text-[13px]" >CS @ University at Buffalo </h2>

        <p className="text-left font-sans mt-2 md:mt-4 text-[#E8DBCC]/[0.85] leading-[1.62] text-[8px] md:text-[25px] ">
          I am a computer science student at the University at Buffalo, graduating Fall 2027. 
            <br />
          I enjoy building full-stack applications, from designing databases to building the interfaces
             <br />
          people actually use.
        </p>



         <div className="flex gap-4 pt-[25px] md:pt-[45px] font-bold">
          <a href="#projects" 
          className="bg-[#F4C9D6] text-[#5C3A30] items-center px-[7px] py-[7px] md:px-[30px] md:py-[20px] text-[8px] md:text-[15px] rounded-full "
          > view my work →  </a>
          <a href="mailto:nazifabari@gmail.com"
          className="border border-[#e8dbcc]/[0.85] px-[7px] py-[7px] md:px-[30px] md:py-[20px] rounded-full text-[8px] md:text-[15px] text-[#e8dbcc] items-center"
          > get in touch </a>
        </div>
      </div>



      <div className="md:px-[30px] pl-[15px] pt-[20px] md:pt-[40px] ">
        <img 
          src={profilePhoto} 
          alt="profile image" 
          className=" w-[140px] md:w-[500px] rounded-3xl border-2 border-[#F4C9D6]  "
        />
      </div>
     </div>
      
   
  )
}

export default Intro
