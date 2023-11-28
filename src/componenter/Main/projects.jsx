import "./projects.css"
import { ProjectCard } from "./projectCard"
import Data from "../../cardData/data"

export function Projects(){

    const projectData = Data.map( item => <ProjectCard
    key = {item.key}
    image = {item.image}
    name = {item.name}
    language = {item.language}
    link = {item.link}
    />)

    return(
       
        <section className="products">
          <div className="my-works-container">
            <h3 className="my-works-title">SOME OF MY LATEST WORK</h3>
            <div className="my-works">
              
                {projectData}           
              
            </div>
          </div>
        </section>
       
    )
}