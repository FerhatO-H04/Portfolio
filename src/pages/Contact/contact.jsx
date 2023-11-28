import "./contact.css"

export function Contact () {
    return(
        <>
        <div className="contact--container">
            <div className="contact--container--title">
                <h1>CONTACT.</h1>
                <p className="contactText">Feel free to Contact me by email and I will get back to you as soon as possible</p>
            </div>


            <form action="https://formsubmit.co/ferhatoh04.kodehode@gmail.com" method="POST" >

            <div className="contactForm">
                <div className="contactForm--sender">
                    <div className="sender--name">
                        <label htmlFor="name" >Name</label>
                        <input type="text"  name="name" required/>
                    </div>
                    <div className="sender--email">
                        <label htmlFor="email" >Email</label>
                        <input type="email"  name="email" required/>
                    </div>
                </div>

                <div className="message">
                    <label htmlFor="message" >Message</label>
                    <textarea name="message"  cols="30" rows="10" required/> 
                </div>
            </div>
            <div className="form--button">
                <button type="submit" className="sendMailButton">Send email</button>
            </div>


            </form>


        
            
        </div>

       
            
        
        </>
    )
}