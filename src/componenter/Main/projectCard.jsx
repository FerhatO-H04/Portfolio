import "./projectCard.css"
export function ProjectCard(props){
    return(
        <>
          <a href={props.link} target="_blank">
             <div className="work">
                  <img className="work-image" src={props.image} alt="" />
                  <div className="work-description">
                    <h4 className="work-name">{props.name}</h4>
                    <p className="work-language">{props.language}</p>
                  </div>
             </div>
          </a>
        
        </>
    )
}