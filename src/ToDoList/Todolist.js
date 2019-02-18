import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    OnChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    AddToDo(event) {
        event.preventDefault();
        this.setState({
            userInput:'',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteItem(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index,1);
        this.setState({
            //items : this.state.items.splice(this.state.items.indexOf(event.target.value),1)
            items:array
        })
    }


    renderDiv() {
        return this.state.items.map((item) => {
            return (
                <div key="item">
                    {item} | <button onClick={this.deleteItem.bind(this)}>X</button>
                </div>
            );
        });

    }

    render() {
        return (
            <div>
                <form>
                    <h1>Ma To Do List</h1>
                    <input
                        value={this.state.userInput}
                        type="text"
                        placeholder="Entrer un to do item"
                        onChange={this.OnChange.bind(this)}
                    ></input>
                    <button
                        onClick={this.AddToDo.bind(this)}
                    >Ajouter</button>
                </form>
                <div>
                    {this.renderDiv()}
                </div>
            </div>
        );
    }


}


export default TodoList;

