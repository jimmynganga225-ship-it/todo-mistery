// 1. VARIABLES (Using 'const' and 'let' as per your guide)
const appTitle = "Foundations Todo App";
let totalTasks = 3; 

// 2. DOM SELECTION (Using 'querySelector')
const titleElement = document.querySelector('#main-title');
const container = document.querySelector('#todo-container');

// 3. UPDATING THE DOM (Using 'textContent' and 'innerHTML')
titleElement.textContent = appTitle;

// This is the "Hardcoded List" your guide mentioned
const myTasks = `
    <ul>
        <li>Learn Variables</li>
        <li>Practice DOM Selection</li>
        <li>Commit to Git</li>
    </ul>
`;

// Injecting the tasks into the page
container.innerHTML = myTasks;