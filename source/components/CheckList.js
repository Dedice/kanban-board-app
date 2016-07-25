import React from 'react';

const CheckList = props => {
    const tasks = props.tasks.map(task => {
        return (
            <li key={task.id} className="check-list-task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="check-list-task-name" />
            </li>

        );
    });

    return (
        <div className="check-list">
            <ul>{tasks}</ul>
        </div>
    );
};

export default CheckList;