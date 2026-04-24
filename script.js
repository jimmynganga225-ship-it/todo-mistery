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
