import profilePhoto from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';



function Intro() {        
  return (
       
    <div className="flex bg-[#8E756E] h-screen w-full px-[6vw] pt-[10vh]">

      <div className="flex-1 min-w-0 pt-[15vh]">
        

        <div className=" flex text-[13px] mb-[2vh] font-semibold uppercase tracking-[0.14em] text-[#E8DBCC]/[0.78] items-center gap-2">
         <span className="inline-block w-[26px] h-[1.5px] bg-[#F4C9D6]" />  computer science · class of 2027
        </div>

        <TypeAnimation
          className="font-bold text-[12vh] italic text-[#F4C9D6]  leading-none"
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

        <h1 className="text-left font-semibold font-sans mt-7 text-[#e8dbcc] text-[clamp(19px,2.1vw,26px)]" >CS @ University at Buffalo </h1>

        <p className="text-left font-sans mt-4 text-[#E8DBCC]/[0.85] leading-[1.62] text-[clamp(16px,1.5vw,19px)] max-w-[45vw]">
          I am a computer science student at the University at Buffalo, graduating Fall 2027. I enjoy building full-stack applications, from designing databases to building the interfaces people actually use.
        </p>



         <div className="flex gap-4 pt-[5vh] font-bold">
          <a href="" 
          className="bg-[#F4C9D6] text-[#5C3A30] items-center px-[2vw] py-[2vh] rounded-full "
          > view my work →  </a>



          <a href="" 
          className="border border-[#e8dbcc]/[0.85] items-center px-[2vw] py-[2vh] rounded-full text-[#e8dbcc] items-center"
          > get in touch </a>

         
        </div>

















      </div>



      <div className="flex-shrink-0 px-[3vw] pt-[4vh]">
        <img 
          src={profilePhoto} 
          alt="profile image" 
          className="w-[50vh] rounded-3xl border-2 border-[#F4C9D6]  "
        />
      </div>

    


      </div>
      
   
  )
}

export default Intro
