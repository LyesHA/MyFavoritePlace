import React, { Component } from 'react';

class Welcome extends Component {
constructor(){
    super();
    this.state = {
        count :0
    }
}
    addOne(){
        this.setState({
            count: this.state.count+1
        }) 
    }
    removeOne(){
        this.setState({
            count: this.state.count-1
        }) 
    }

    render(){
        
        return (
            <div>
                <h1>Welcome {this.props.name}</h1>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.addOne()}>Ajouter 1</button>
                <button onClick={()=> this.removeOne()}>Enlever 1</button>
            </div>

        );
    }
}

export default Welcome;
