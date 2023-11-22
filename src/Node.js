
import React from "react";
import "./Node.css";




class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: props.x}
        this.onClick = this.onClick.bind(this)
        this.updateMousePosition = this.updateMousePosition.bind(this)
        this.onRelease = this.onRelease.bind(this)
    }
    onRelease() {
      window.removeEventListener('mousemove', this.updateMousePosition)
    }

    render() {
        return (
            <h1 ref={node =>(this.node=node)} onDrag={this.onClick}class="Node" style={{left: this.state.x}}>
                hello
            </h1>
        )
    }

    updateMousePosition(ev) {
     this.setState({x: ev.clientX+"px"})
    }

    onClick() {
      window.addEventListener('mousemove', this.updateMousePosition)
      alert("drug")
    }
    componentDidMount(){
      this.node.addEventListener("dragStart",this.onClick);
    }
    
}

export default Node;