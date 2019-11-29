import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        title: '',
        description: '',   
    }

    miSubmit = (e) => {
       // console.log('Submiting');
       //console.log(this.state);
       //this.props.addTask({title: 'task four', description: 'This is a new description'});
       this.props.addTask({title: this.state.title, description: this.state.description});
        e.preventDefault();
    }
    miChange = (e) => {
        //console.info(e.target.name, e.target.value);        
        this.setState({
           [ e.target.name]: e.target.value
        })
    }

    render() {                
        return (
            <form onSubmit={this.miSubmit} style={{'border':'1px solid #000', 'padding':'2em'}} >
                <input onChange={this.miChange} 
                type="text" 
                placeholder="Write a Task" 
                value={this.state.title}
                name="title"/>
                <br/><br/>
                <textarea onChange={this.miChange} 
                placeholder="Write a description" 
                value={this.state.description}
                name="description"></textarea>
                <br/><br/>
                <input type="submit" value="Save"/>
            </form>
        );
    }
}

export default TaskForm;