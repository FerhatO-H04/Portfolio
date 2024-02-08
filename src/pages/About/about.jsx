import "./about.css"
import { Link } from 'react-router-dom';




export function About(){
    return(

        <>
       
        <div className="about--container">
            <div className="title--container">
                <h1 className="about--title">ABOUT.</h1>
                <p className="about--Text">Here you will find more information 
                about me, what I do, and my current skills mostly in terms of 
                programming and technology</p>
            </div>
           
           
            <div className="aboutMeContainer">
                <h2 className="aboutMe--title">Get to know me!</h2>

                <p className="aboutMe--text"> I'm a Frontend Web Developer building the Front-end of Websites and Web 
                    Applications that leads to the success of the overall product.
                    Check out some of my work in the Projects section. 
                    <br /> <br /> I also like sharing content related to the stuff that I have learned over the years
                    in Web Development so it can help other people of the Dev Community. 
                    Feel free to Connect or Follow me on my Linkedin where I post
                    useful content related to Web Development and Programming.
                    <br /><br /> I'm open to Job opportunities where I can contribute, learn and grow. 
                    If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </p>

               <Link   to="/contact"><button className="contactButton" >CONTACT</button></Link>
            </div>

            <div className="mySkillsContainer">
                <h2>My Skills</h2>
                <div className="skills">
                    <div className="skill">Html</div>
                    <div className="skill">Css</div>
                    <div className="skill">Js</div>
                    <div className="skill">React</div>
                    <div className="skill">GitHub</div>
                    <div className="skill">Figma</div>
                    <div className="skill">Node.js</div>
                    <div className="skill">SQL</div>
                </div>
            </div>

            
         </div>

        
        
        </>
    )
}