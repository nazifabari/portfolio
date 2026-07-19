import profilePhoto from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';



function Intro() {        
  return (
       
    <div id="home" className=" flex bg-[#8E756E] flex-col xl:flex-row py-10 px-5 xl:py-20 xl:px-25 2xl:px-30">

      <div className="flex-1 pt-5 xl:pt-30  2xl:pt-40 order-2 xl:order-1 ">

        <div className="text-[10px] xl:text-[15px] font-semibold uppercase text-[#E8DBCC]/[0.78]  hidden xl:block ">
        computer science · class of 2027
        </div>

        <TypeAnimation
          className="pt-[13px] xl:pt-[20px] text-[45px] md:text-[60px] xl:text-[70px] 2xl:text-[90px] source-code-pro-n text-center xl:text-left leading-tight tracking-[-0.05em]  text-[#F4C9D6] "
          sequence={[
            'hi, i am nazifa!', 3000, 
            'welcome!', 1000, 
            'hi, i am nazifa!', 1000
          ]}
          wrapper="h1"
          cursor={false}
          speed={1}
          repeat={1}
          deletionSpeed={1}
        />

        <h2 className=" text-center xl:text-left font-semibold cormorant-garamond-title  mt-5 xl:mt-8 text-[#e8dbcc] md:text-[40px] text-[23px] " >CS @ University at Buffalo </h2>

        <p className="xl:text-left text-center font-sans mt-2 md:mt-5 text-[#E8DBCC]/[0.85] leading-[1.62] text-[15px] md:text-[25px] w-full xl:w-[700px] 2xl:w-[900px]">
          I am a computer science student at the University at Buffalo, graduating Fall 2027. 
          I enjoy building full-stack applications, from designing databases to building the interfaces
          people actually use.
        </p>



         <div className="flex xl:gap-4 gap-5 pt-[25px] md:pt-[35px] xl:pt-[45px] font-bold  justify-center xl:justify-start">

          <a href="#projects"  className= "hover:bg-[#79605a] border border-[#F4C9D6] hover:border-[#5C3A30] bg-[#F4C9D6] text-[#5C3A30] hover:text-[#e8dbcc] items-center px-[13px] py-[13px] md:px-[30px] md:py-[20px] text-[12px] md:text-[15px] rounded-full "
          > view my work →  </a>
      
          <a href="mailto:nazifabari@gmail.com" className= "hover:bg-[#79605a] border border-[#e8dbcc]/[0.85] hover:border-[#5C3A30] px-[13px] py-[13px] md:px-[30px] md:py-[20px] rounded-full text-[12px] md:text-[15px] text-[#e8dbcc] items-center"
          > get in touch </a>
        </div>
      </div>



        <div className="pt-[45px] md:pt-[65px] xl:pt-[130px] 2xl:pt-[110px] 2xl:pr-[80px] flex justify-center xl:justify-start order-1 xl:order-2  ">
          <img 
          src={profilePhoto} 
          alt="profile image" 
          className="  w-[250px] h-[270px]  md:h-[450px] 2xl:h-[550px]  md:w-[400px]  2xl:w-[450px]  rounded-3xl  object-cover object-top"
        />
      </div>
      
     </div>
   
    
  )
}

export default Intro
