import React from "react"

class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <a   href={this.props.link}
            class =" p-4 container bg-paper hover:bg-[#d0c5ac] rounded-lg w-96">
                <div class="text-xl">{this.props.name}</div>
                <div>{this.props.description}</div>
            </a>

        );
    }
}

class Projects extends React.Component {
    render() {
        return (
            <div class="bg-projects  w-full h-full bg-fill bg-center md:container md:mx-auto">
                
                <div class="text-center h-screen gap-y-10 flex-col flex flex-wrap items-center justify-center">
                    <div class=" bg-paper rounded-lg p-3 text-[#993945] text-5xl">Projects</div>
                    <Project  link="https://github.com/ChristopherOosthuizen/ABlaze" description="A compiled programming language inspired by java and python" name="ABlaze"/>
                    <Project link="https://github.com/ChristopherOosthuizen/SearchEngine" description="A search engine built from the ground up which required me to make a custom
web framework, in-memory database, and web scraper." name="Search Engine"/>
                    <Project link="https://github.com/NickOosthuizen/Rising-Tide" description="A web app utilizing the google cloud API that returns whether a given location is
at risk of flooding" name="Rising Tides"/>
                </div>
            </div>
        );
    }
}
export default Projects;