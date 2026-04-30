let todos = JSON.parse(localStorage.getItem("mytasks")) || [];
let currentfilter = "all";
let searchQuery = "";

const addBnt = document.getElementById("addBnt");
const input = document.getElementById("input");
const searchinput = document.getElementById("searchinput");
const filterBtns = document.querySelectorAll("[data-filter]");

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
    render();
    savetolocalsstorage();
}

function deletetodo(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        render();
        savetolocalsstorage();
    }
}

function toggleTaskCompletion(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
        savetolocalsstorage();
    }
}

function getFilteredTodos() {
    return todos
        .filter(todo => {
            if (currentfilter === "completed") {
                return todo.completed;
            }
            if (currentfilter === "pending") {
                return !todo.completed;
            }
            return true;
        })
        .filter(todo => {
            if (!searchQuery) {
                return true;
            }
            return todo.text.toLowerCase().includes(searchQuery);
        });
}

function render() {
    const list = document.getElementById("todolist");
    if (!list) {
        return;
    }
    list.innerHTML = "";
    const filteredTodos = getFilteredTodos();

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-button" type="button">Delete</button>
        `;

        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", event => {
            event.stopPropagation();
            deletetodo(todo.id);
        });

        li.addEventListener("click", () => toggleTaskCompletion(todo.id));
        list.appendChild(li);
    });
}

if (addBnt && input) {
    addBnt.addEventListener("click", () => {
        const text = input.value.trim();
        if (text !== "") {
            addtodo(text);
            input.value = "";
        }
    });
}

if (searchinput) {
    searchinput.addEventListener("input", event => {
        searchQuery = event.target.value.trim().toLowerCase();
        render();
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentfilter = btn.dataset.filter || "all";
        render();
    });
});

render();
