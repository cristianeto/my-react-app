import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';
class Task extends Component {

    styleCompleted(){
        return{
            fontSize:'20px',
            color: this.props.task.done? 'gray': 'red',
            textDecoration: this.props.task.done? 'line-through':'none'
        }
    }
    render() {
        const {task}= this.props;
        return (
            <div style={this.styleCompleted()}>
                {task.title} - 
                {task.description} - 
                {task.done} - 
                {task.id}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)} >x</button>
            </div>
        );
    }
}
Task.propTypes ={
    task:PropTypes.object.isRequired,
}

const btnDelete ={
    fontSize: '2em',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'Pointer' 
}
export default Task;