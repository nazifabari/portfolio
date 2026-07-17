import couvrantPhoto from '../assets/couvrant_image.png'
import portfolioPhoto from '../assets/portfolio_image.png'




function Projects(){

return(
 <div  id="projects" className= " bg-[#8E756E] px-5 xl:pb-50 xl:pt-20 2xl:px-35 xl:py-20 xl:px-20  ">
    <div className= "flex-1">
           <h1 className= " font-bold text-[20px] md:text-[75px] cormorant-garamond-title  italic text-[#F4C9D6] text-left  ">
            projects
        </h1>
    <div className=" max-w-6 md:max-w-15 border-b-2 md:border-b-8 border-pink-200 pt-4 w-full"></div>


        <div className="grid pt-15 grid-cols-2 md:grid-cols-2 w-full gap-8 2xl:gap-20 ">

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
                        <a className="text-[#e8dbcc] text-[12px]  "  href="">live demo ↗</a>         
                        <a className="text-[#e8dbcc] text-[12px] "  href="https://github.com/nazifabari/couvrant-fashion-app">github</a>
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
                        <a className="text-[#e8dbcc] text-[12px]  "  href="">live demo ↗ </a>         
                        <a className="text-[#e8dbcc] text-[12px] "  href="https://github.com/nazifabari/portfolio">github</a>
                    </div>
                </div>
            </article>








            </div>



</div>



    </div>
)

}
export default Projects
