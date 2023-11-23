import React from "react";

class Navbar extends React.Component {
    render() {
        return ( 
          <div class="px-4">
          <ul class="flex-wrap p-2 w-full items-center flex ">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="/">Home</a>
            </li>
            <li class="mr-6 px-3 py-2">
              <a class="text-blue-500 hover:text-blue-800" href="./Tech_Resume.pdf">Resume</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="/projects">Projects</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="/contact">Contact</a>
            </li>
        </ul>
        </div>
        

        );
    }
}

export default Navbar;