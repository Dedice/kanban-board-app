import React from 'react';
import List from './List';

// The KanbanBoard component will receive the data as props and will be responsible for
// filtering the status to create three list components: "To Do", "In Progress", "Done".
const KanbanBoard = props => {
    return (
        <List id="todo" title="To Do" cards={
            props.cards.filter((card) => card.status === 'todo')
        } />
    );
};

export default KanbanBoard;