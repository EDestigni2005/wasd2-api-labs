import React from 'react';

const Task = (props) => {

    const getPriorityStyle = () => {
        switch (props.priority) {
            case 'Low':
                return { backgroundColor: 'green' };
            case 'Medium':
                return { backgroundColor: 'goldenrod' };
            case 'High':
                return { backgroundColor: 'red' };
            default:
                return {};
        }
    };

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="taskDescription">{props.description}</p>
            <p className="taskPriority" style={getPriorityStyle()}>
                {props.priority}
            </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}


export default Task;
