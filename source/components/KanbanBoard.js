import React from 'react';
import List from './List';


const KanbanBoard = props => {
    return (
        <List id="todo" title="To Do" cards={
            props.cards.filter((card) => card.status === 'todo')
        } />
    );
};

export default KanbanBoard;