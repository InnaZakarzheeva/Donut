import React from "react";
import './form.css';

export default class Form extends React.Component{
    render(){
        return(
           <div className="form_wrapper">
           <br></br>
        
	            <div class="parallax p5">
                   <a name="footer"> <span className="title_block">Partnership</span></a>
                </div>
                
<br></br>
<br></br>
                <form class="form">
                   
                    <input type="text" className='email' placeholder="Enter your e-mail"/>
                   
                    <textarea name="text" rows="5" cols="10" className="text_about" placeholder="Enter your message"/> 
                    <button type='submit' className='validate'>Send</button>
                </form>

                <div className="footer_wrapper">
                <div class="contacts">
                    <span>S<img src={require("../image/logo.png")} className="footer_logo"/>CIAL</span>
                    <div className="social">
                        <img src={require("../image/facebook.png")} className="social_img"/>
                        <img src={require("../image/instagram.png")} className="social_img"/>
                        <img src={require("../image/mail.png")} className="social_img"/>
                    </div>
                </div>
      </div>
     
            </div>
        );
    }
}

