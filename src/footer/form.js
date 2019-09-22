import React from "react";
import './form.css';

export default class Form extends React.Component{
    state = {
        email: '',
        text: ''
      }
      sendMail = () =>{
        const  { email, text } = this.state
        const linkTag = document.getElementById('link')
        linkTag.href = `mailto:innazakarzheeva2@gmail.com?subject=Partnership&body=${"Email: " + email +'%0A'+ "Текст: "+ text}`
        linkTag.click()
      }
    
    render(){
        return(
           <div className="form_wrapper">
           <br></br>
	            <div class="parallax p5">
                   <a name="footer"><span className="title_block">Partnership</span></a>
                </div>
                
<br></br>
<br></br>
<a id='link'target="_blank" style={{display: 'none'}} ></a>
                <form class="form">
               
                   
                    <input type="text"  name="email" className='email' placeholder="Enter your e-mail"  onChange = {(event)=>this.setState({email: event.target.value})}/>
                   
                    <textarea name="text" rows="5" cols="10" className="text_about" placeholder="Enter your message" onChange = {(event)=>this.setState({text: event.target.value})}/> 
                    <input type='submit' className='validate' onClick={this.sendMail}></input>
                   
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

