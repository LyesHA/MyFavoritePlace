import React, { Component } from 'react';

class MyPlace extends Component{
    constructor(){
        super();
        //Create an Place object
        this.state = {
            placeName:'',
            pictureUrl:''
        }    
    }


    render(){
        return(
        <div className="col-lg-6 col-md-6">
            <img className="img-fluid" src={this.props.ImageUrl} alt=""></img>
            <h3> {this.props.Title} </h3>
        </div>         

        );
    }

}

export default MyPlace;
