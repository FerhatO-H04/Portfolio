import "./mainSection.css"
import { Link } from "react-router-dom"

export function MainSection(){
    return(
        <>
          <section className="main-text">
          <div className="main-text-container">
            <h1 className="name">I’m Ferhat Orasan</h1>
            <h3 className="main-text-content">A front end focused web developer building the frontend of websites and web applications. Clean, elegant and efficient code that creates beautiful and engaging digital experiences </h3>
            <p ><Link className="learn-about-me" to="/about">See more about me<i className="fa-solid fa-arrow-right"></i></Link></p> 
          </div>
          <div className="icons">
            <a href="https://github.com/FerhatO-H04"><i className="icon fa-brands fa-github fa-2x"></i></a>
            <i className="icon fa-brands fa-x-twitter fa-2x"></i>
            
            <a href="https://www.linkedin.com/in/ferhat-o-831658273/" target="_blank"><i className="icon fa-brands fa-linkedin fa-2x"></i></a>
          </div>
         </section>
        </>
    )
}