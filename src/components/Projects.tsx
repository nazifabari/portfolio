import couvrantPhoto from '../assets/couvrant_image.png'
import portfolioPhoto from '../assets/portfolio_image.png'




function Projects(){

return(
 <div  id="projects" className= " bg-[#8E756E] 2xl:px-30  xl:px-25 md:pb-15 px-5 pb-8  ">
    
    <div className="border-b-1  md:border-b-2 border-[#FFFFFF]/[0.10] pt-15 w-full"></div>

    <div className= "">
        
        <h2 className="uppercase tracking-[0.2em] text-[#e8dbcc]/[0.80] font-semibold pt-10  md:text-[15px] text-[10px]  ">work</h2>
           <h1 className= "font-bold cormorant-garamond-title  text-[40px] md:text-[75px] text-[#F4C9D6] leading-none ">
            projects
          </h1>


        <div className="grid pt-[35px] md:pt-[50px] grid-cols-1 md:grid-cols-2 w-full gap-10 2xl:gap-20 ">

            <article className = "bg-[#D4D4D4]/[0.10]  rounded-2xl border-1 border-[#FFFFFF]/[0.30] flex flex-col hover:-translate-y-5 transition-transform duration-400" >
                {/* project image */}
                <a href=""><img className = " w-full md:h-50 2xl:h-60 object-cover object-center rounded-t-2xl "  src={couvrantPhoto} alt="project 1" /></a>

                {/* text content div */}
                <div className=" p-5  flex flex-col flex-1         ">
                    <h3 className="font-bold font-sans italic text-[#e8dbcc] text-[20px] " >  Couvrant   </h3>
                    <p className="font-sans text-[#e8dbcc] text-[15px] pt-1" > A curated fashion platform aggregating modest clothing from multiple brands and retailers in one place.                             </p>

                    <div className=" flex flex-wrap pt-4 gap-3" >
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > React </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > TypeScript </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > PostgreSQL </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > Tailwind </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > SQLAlchemy </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > Python </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > Pydantic </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > FastAPI </span> 
                    </div>

                    <div className = " flex gap-5 pt-4 mt-auto">
                        <a className="text-[#e8dbcc] text-[12px] hover:font-bold  "  href="">live demo ↗</a>         
                        <a className="text-[#e8dbcc] text-[12px] hover:font-bold "  href="https://github.com/nazifabari/couvrant-fashion-app">github</a>
                    </div>
                </div>
            </article>





               <article className = "bg-[#D4D4D4]/[0.10]  rounded-2xl border-1 border-[#FFFFFF]/[0.30] flex flex-col hover:-translate-y-5 transition-transform duration-400  " >
                {/* project image */}
               <a href=""><img className = " w-full md:h-50 2xl:h-60 object-cover object-top rounded-t-2xl " src={portfolioPhoto} alt="project 2" /></a> 
              
                    {/* text content div */}
                <div className="flex flex-col flex-1 p-5           ">
                    <h3 className="font-bold font-sans italic text-[#e8dbcc] text-[20px] " >  Personal Portfolio</h3>
                    <p className="font-sans text-[#e8dbcc] text-[15px] pt-1" > The site you're looking at, designed and developed from scratch to showcase my work and skills.  </p>

                    <div className=" flex flex-wrap pt-4 gap-3" >
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > React </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > TypeScript </span>
                        <span className=" rounded-4xl border-1 border-[#F4C9D6] px-3 py-2 text-[#F4C9D6] font-bold text-[10px]" > Tailwind </span>
                    </div>

                    <div className = " flex gap-5 pt-4 mt-auto">
                        <a className="text-[#e8dbcc] text-[12px] hover:font-bold  "  href="https://nazb.vercel.app">live demo ↗ </a>         
                        <a className="text-[#e8dbcc] text-[12px] hover:font-bold "  href="https://github.com/nazifabari/portfolio">github</a>
                    </div>
                </div>
            </article>








            </div>



</div>



    </div>
)

}
export default Projects
