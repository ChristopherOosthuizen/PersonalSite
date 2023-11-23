
import React from 'react';
import Resume from './Resume.png'
import Linkedin from './Linkedin.png'
import Github from './github.png';
class Home extends React.Component {
    
    render() {
        return (<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <div class="text-2xl text-emerald-600">Chris Oosthuizen</div>
            <div class="text-gray-500" >University of Houston Student and Programmer of 11 years</div>
            <div class="h-[10%] columns-3"><a href="./Tech_Resume.png"><img  class=""src={Resume}/></a> <a href="https://www.linkedin.com/in/christopher-oosthuizen-0151a9211/"><img class=""src={Linkedin}/></a> <img class=""src={Github}/></div>
        </div>);
    }
};
export default Home;