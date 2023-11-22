import React from 'react';
import Portrait from './IMG_8203 2.JPG'
class About extends React.Component {
    render() {
        return (
            <div class="absolute w-full h-full bg-teal-800 top-[100%]">
                <div class="absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 ">
                    <div class="text-gray-400 w-[130%]">
                    <div class="text-3xl">About Me</div>
                I'm Chris Oosthuizen, a University of Houston student and researcher at the SAIL lab, where I focus on large language models. Programming has been a lifelong passion, and I'm continually exploring new areas, especially in machine learning and knowledge graph research. Besides my academic pursuits, I'm an avid rock climber, constantly pushing my limits in both coding and climbing. My journey is driven by a deep commitment to learning and a desire to excel in every endeavor.
                </div>
                </div>
            </div>
        )
    }
}
export default About;