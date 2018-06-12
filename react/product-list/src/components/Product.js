import React, {Component} from 'react'

export default class Product extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main">
                            <div className="image">
                                <img src={require("../Images/mocking-emoji.jpeg")}/>
                            </div>
                            <div className="header">
                                <a>
                                    <i className="fa fa-2x fa-carat-up"/>
                                </a>
                                 No of votes
                            </div>
                            <div className="description">
                                <a>
                                  Fort Knight
                                </a>  
                                <p> Authentic renaissance actors, delivered i</p>
                            </div>
                            <div className="extra">
                                <span> submitted by :</span>
                                <img className="avater" src={require("../Images/emoji.jpeg")}/>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}