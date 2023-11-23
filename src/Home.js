
import React from 'react';
import Resume from './Resume.png'
import Linkedin from './Linkedin.png'
import Github from './github.png';
import Background from './background.png'
class Home extends React.Component {
    
    render() {
        return (<div class="bg-mainpage w-full h-full bg-fill bg-center md:container md:mx-auto">
            <div class="text-center text-align-top h-screen flex-col flex flex-wrap items-center justify-center">
               <div class="  text-5xl"> Chris Oosthuizen </div>
               <div>University of Houston Student and LLM researcher</div>
               
            </div>
            
        </div>);
    }
};
export default Home;