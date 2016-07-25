import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';
import '../../public/css/styles.css';

let cardsList = [
    {
        id: 1,
        title: 'Read the book \"Pro React\"',
        description: 'I should read the whole book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 2,
        title: 'Write some code',
        description: 'Code along with the samples in the \"Pro React\" book',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: 'ContactList Example',
                done: true
            },
            {
                id: 2,
                name: 'Kanban Example',
                done: false
            },
            {
                id: 3,
                name: 'My own experiments',
                done: false
            }
        ]
    }
];

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <KanbanBoard cards={cardsList} />
            </div>
        );
    }
}