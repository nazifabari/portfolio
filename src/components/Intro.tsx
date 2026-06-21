import profilePhoto from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';



function Intro() {        
  return (
       
    <div className="flex bg-[#8E756E] h-screen w-full px-[5vw] pt-[12vh]">
      

      <div className="flex-shrink-0">
        <img 
          src={profilePhoto} 
          alt="profile image" 
          className="w-[53vh] rounded-3xl"
        />
      </div>
      
     
      <div className="flex-1 min-w-0 pl-[5vw] pr-[4vw] pt-[18vh]">
        <TypeAnimation
          className="font-bold text-[12vh] italic text-[#F4C9D6] leading-none "
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



        <h1 className="text-left font-semibold font-sans mt-7 text-[#e8dbcc] text-5xl" >CS @ University at Buffalo </h1>

        <p className="text-left font-semibold font-sans mt-8 text-[#e8dbcc] text-3xl leading-relaxed break-words">
          I am a computer science student at the University at Buffalo, graduating Fall 2027. I enjoy building full-stack applications, from designing databases to building the interfaces people actually use.
        </p>
      </div>
      </div>
      
   
  )
}

export default Intro
