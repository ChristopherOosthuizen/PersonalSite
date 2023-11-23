import React from "react";
import Email from "./email.png";
import Instagram from "./instagram.png"
import Resume from './resume.png'
import Github from './github.png'
import Linkedin from './divinchi.png'
class Contact extends React.Component {
    render() {
        return (
            <div class="bg-contact  w-full h-full bg-fill bg-center md:container md:mx-auto">
                <div class="text-center  h-screen flex-col flex flex-wrap items-center justify-center">
                    <div class="text-5xl p-5 text-[#911b13]">Contact Me</div>
                    <div class="w-96 p-4">Feel free to contact me about what ever you want I'm always intersted</div>
                    <div class="columns-4">
                   <a href="https://www.instagram.com/chrisjoosthuizen/"><img class="w-16" src={Instagram}/></a>
                   <a href="mailto:christopher.jan.oosthuizen@gmail.com"><img class="w-16" src={Email}/></a>
                   <a href="https://github.com/ChristopherOosthuizen"><img class="w-16" src={Github} /></a>
                    <a href="https://www.linkedin.com/in/christopher-oosthuizen-0151a9211/"><img class="w-16" src={Linkedin}/></a>
                   </div>
                </div> 
            </div>
        );
    }
}
export default Contact;