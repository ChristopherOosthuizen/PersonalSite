import React from "react";

class Navbar extends React.Component {
    render() {
        return ( 
          <div>
          <ul class="flex-wrap p-2 w-full items-center flex ">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
            </li>
            <li class="mr-6 px-3 py-2">
              <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
            </li>
        </ul>
        </div>
        

        );
    }
}

export default Navbar;