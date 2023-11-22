import logo from './logo.svg';
import './App.css';
import Node from "./Node";
import Home from './Home';
import React from 'react';
import About from './About';
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
    return (
        <div onScroll={this.handleScroll} class=" bg-gray-800 w-full h-full absolute" >
            <Home/>
            <About/>
          </div>
    
    );
  }
}

export default App;