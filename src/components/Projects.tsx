import couvrantPhoto from '../assets/couvrant_image.png'
import portfolioPhoto from '../assets/portfolio_image.png'




function Projects(){

return(
 <div  id="projects" className= "flex bg-[#8E756E] px-5 2xl:px-35 xl:py-20 xl:px-20 ">
    <div className= "flex-1">
           <h1 className= " font-bold text-[20px] md:text-[75px] cormorant-garamond-title  italic text-[#F4C9D6] text-left ">
            projects
        </h1>
    <div className=" max-w-6 md:max-w-15 border-b-2 md:border-b-8 border-pink-200  w-full"></div>


        <div className="grid pt-15 grid-cols-1 md:grid-cols-2 w-full gap-8 2xl:gap-20">


            <article className = "bg-[#D4D4D4]/[0.10]  rounded-2xl border-1 border-[#FFFFFF]/[0.30]" >
                {/* project image */}
                <img className = " w-full md:h-50 2xl:h-60 object-cover object-center rounded-t-2xl "  src={couvrantPhoto} alt="project 1" />
              
              
              
              
                {/* text content  */}
                <div></div>
            </article>





               <article className = "bg-[#D4D4D4]/[0.10]  rounded-2xl border-1 border-[#FFFFFF]/[0.30]" >
                {/* project image */}
                <img className = " w-full md:h-50 2xl:h-60 object-cover object-top rounded-t-2xl " src={portfolioPhoto} alt="project 2" />
              
              
              
              
                {/* text content  */}
                <div></div>
            </article>








            </div>



</div>



    </div>
)

}
export default Projects
