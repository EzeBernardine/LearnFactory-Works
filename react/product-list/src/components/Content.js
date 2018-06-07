import React, {Component} from "react";

export default class Content extends Component{
    componentWillMount(){
        console.log("component will mount")
    }
    componentDidMount(){
        console.log("componeont did mount")
    }
    componentWIllReceiveProps(newProps){
        console.log("component will recieve props")
    }
    shouldComponentUpdate(newProps, newState){
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("components will update")
    }
    componentDIdUpdate(prevProps, prevState){
        console.log("components did update")
    }
    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}