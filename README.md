### Kanban Board Application


**App Module (App.js)**
You will keep the app.js file really simple for now. It will only contain the data and it will only render a
KanbanBoard component. In this first iteration of your Kanban app, the data will be hard-coded on a local
variable, but in future chapters you will fetch it from an API.

**KanbanBoard Component (KanbanBoard.js)**
The KanbanBoard component will receive the data as props and will be responsible for filtering the status to
create three list components: “To Do,” “In Progress,” and “Done”.

**List Component (List.js)**
The List component will just display the list’s name and render all the card components within it. Notice
that you will map the cards array received via props and pass individual information such as the title and
description down to the card component, also as props.

**Card Component (Card.js)**
The Card is the component with which the user will interact most. Each card has a title, a description and a
checklist.

**Checklist Component (CheckList.js)**
Finally, there is the component that makes the bottom part of the card, the checklist. Notice that you’re still
missing the form to create new tasks; you will work on this later.