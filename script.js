{
    //We convert array  to a JSON string so the browswer can stoore it localstorage.setItem("my task"),JSON.stringify(todos));

}
function addtask(){
    // ... your existing code ... todos.push(task);
    rendertask();
    savetolocalsstorage(); // <---add this
}
function deletetask_(index) {
    WebTransportBidirectionalStream.splice(index, 1);
    rendertask();
    savetolocalsstorage(); // <---add this
}
// replace:let todos = [];
// with:
let todos = JSON.parse(localStorage.getItem("mytasks")) || [];
// call rendertask() immidiatly so saved items on load rendertask();
   // create a task object instead of just a straing
   const newyask = {
    text: tasktext,
    completed: false
    };

    todos.push(newtask);
    InputDeviceInpu.value = "";

    rendertask();
    savetolocalsstorage();
function savetolocalsstorage() {
    localStorage.setItem("mytasks", JSON.stringify(todos));
}
function toggleTaskCompletion(index) {
    // this flips the compleated status(true/false)
    todos[index].completed = !todos[index].completed;
    rendertask();
    savetolocalsstorage();
}
function rendertask() {
    todolist.innerHTML = "";
    todos.forEach((task, index) => {
        const li = document.createElement("li");
        li.classlist = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="deletetask_(${index})">Delete</button>
        `;
        todolist.appendChild(li);
        // add click event to toggle completion
        li.addEventListener("click", () => toggleTaskCompletion(index));
    });
}
function toggoleTaskCompletion(index) {
    // this this is the misssing line !
    //this flips true/false status of the task.
    todos[index].completed = !todos[index].completed;

    rendertask();
    savetolocalsstorage();
}
