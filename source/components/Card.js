import React from 'react';
import CheckList from './CheckList';

const Card = props => {
    return (
        <div className="card">
            <div className="card-title">{props.title}</div>
            <div className="card-details">
                {props.description}
                <CheckList cardId={props.id} tasks={props.tasks} />
            </div>
        </div>
    );
};

export default Card;