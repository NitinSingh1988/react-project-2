import Contactform from "./Contactform/Contactform";
import Button from "./Button/Button"
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
    <main className="heroSection">
        <div className="heroTop">
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        </div>
        <div className="heroBottom">
            <div>
                <div className="heroButton">
                    <div className="heroButtonTop">
                        <Button icon={<MdMessage fontSize="20px"/>} text="Via Support Chat"/>
                        <Button icon={<MdLocalPhone fontSize="20px"/>} text="Via Call"/>
                    </div>
                    <div className="heroButtonBottom">
                        <Button icon={<MdOutlineEmail fontSize="20px"/>} text="Via Email Form" isOutLine = {true} />
                    </div>
                </div>
                <div className="heroForm">
                    <Contactform />
                </div>
            </div>
            
            <div className="heroImage">
                <img src="/images/Service 24_7-pana-1.svg" alt="" />
            </div>
            
            
           
        </div>
        
    </main>
    
    </>
  )
}

export default HeroSection;

