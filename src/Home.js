
import React from 'react';
import Resume from './Resume.png'
import Github from './github.png'
import Linkedin from './divinchi.png'
class Home extends React.Component {
    
    render() {
        return (<div class="bg-mainpage w-full h-full bg-fill bg-center md:container md:mx-auto">
            <div class="text-center  h-screen flex-col flex flex-wrap items-center justify-center">
               <div class="  text-[#9a3412] text-5xl"> Chris Oosthuizen </div>
               <div class="leading-5 text-[#52525b]">University of Houston Student and LLM Researcher at SAIL</div>
               
               <div class="w-96 p-3 text-sm"> Hi, I'm Chris Oosthuizen, Programming has been a lifelong passion, and I'm continually exploring new areas. Besides my academic pursuits, I'm an avid rock climber and am always excited to learn new things.</div>
               <div class=" p-12 gap-8 h-16 columns-3">
                    <a href="https://github.com/ChristopherOosthuizen" class="columns-1"><img class="w-16" src={Github} /></a>
                    <a href="./Tech_Resume.pdf"><img class="w-16" src={Resume} /></a>
                    <a href="https://www.linkedin.com/in/christopher-oosthuizen-0151a9211/"><img class="w-16" src={Linkedin}/></a>
               </div>
            </div>
            
        </div>);
    }
};
export default Home;