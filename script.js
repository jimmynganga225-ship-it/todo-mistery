let todos = JSON.parse(localStorage.getItem("mytasks")) || [];

function savetolocalsstorage() {
    localStorage.setItem("mytasks", JSON.stringify(todos));
}

function addtodo(text) {
    const newtodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newtodo);
    rendertask();
    savetolocalsstorage();
}

function deletetodo(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        rendertask();
        savetolocalsstorage();
    }
}

function toggleTaskCompletion(index) {
    todos[index].completed = !todos[index].completed;
    rendertask();
    savetolocalsstorage();
}

function rendertask() {
    const list = document.getElementById("todolist");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span>${todo.text}</span>
            <button onclick="deletetodo(${todo.id})">Delete</button>
        `;
        li.addEventListener("click", () => toggleTaskCompletion(index));
        list.appendChild(li);
    });
}

let currentfilter = "all";

function render() {
    const list = document.getElementById("todolist");
    list.innerHTML = "";
    let filteredTodos = todos;

    if (currentfilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    } else if (currentfilter === "pending") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    filteredTodos.forEach((todo, index) => {
        const li = document.createElement("li");
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span>${todo.text}</span>
            <button onclick="deletetodo(${todo.id})">Delete</button>
        `;
        li.addEventListener("click", () => toggleTaskCompletion(index));
        list.appendChild(li);
    });
}

function setfilter(filter) {
    currentFilter = filter;
    renderTasks();
}

function savetolockalstorage() {
    localStorage.setItem("mytasks", JSON.stringify(todos));
}

let todos = JSON.parse(localStorage.getItem("mytasks")) || [];

