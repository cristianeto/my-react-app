import React, { Component } from 'react';



class TaskForm extends Component {
    miSubmit = (e) => {
        console.log('Submiting');
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.miSubmit} style={{'border':'1px solid #000', 'padding':'2em'}} >
                <input type="text" placeholder="Write a Task"/>
                <br/><br/>
                <textarea placeholder="Write a description"></textarea>
                <br/><br/>
                <input type="submit" value="Save"/>
            </form>
        );
    }
}

export default TaskForm;