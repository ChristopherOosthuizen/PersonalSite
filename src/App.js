import logo from './logo.svg';
import './App.css';
import Node from "./Node";
import Home from './Home';
import React from 'react';
import About from './About';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0, components: [<Home/>,<h1>hello</h1>]}
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    document.querySelector('div').addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
  handleScroll(event) {
    this.setState({index: this.state.index+1, components: this.state.components})
    
  }
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>,

      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]);
    
    return (
        <div onScroll={this.handleScroll} class="bg-paper w-full h-full absolute font-['MedievalSharp']" >
                      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet"></link>
            <Navbar/>
            <RouterProvider router={router} />
          </div>
    
    );
  }
}

export default App;
