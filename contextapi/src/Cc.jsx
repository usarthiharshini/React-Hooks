import React,{Component} from "react";
class Crazy extends Component {
    state = { 
        value:1
     } 
    render() { 
        return (
            <div>
           {this.setState({value:this.state.value+1})}
            </div>
        );
    }
}
 
export default Crazy;