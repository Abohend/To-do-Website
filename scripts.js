// add the task to the table after submittion
form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    // hold the input text
    let inputTask = document.querySelector(".form-box");
    let taskValue = inputTask.value;
    
    // add it to the list
    let tasklist = document.querySelector(".todo");
    tasklist.innerHTML += '<li class="task"> \
    <p>' + taskValue +'</p> \
    <button class="done-btn">✓</button> \
    <button class="delete-btn">✗</button> \
</li>';
        

    // remove it from input field
    inputTask.value = "";
});


// handle tick & delete button
let tasklist = document.querySelector(".todo");
tasklist.addEventListener("click", function(e){
    // handle tick
    if (e.target.classList.contains('done-btn'))
    {
        task = e.target.previousElementSibling;
        task.classList.add("done-task");
        e.target.classList.add("pushed-tick");
    }
    else if(e.target.classList.contains('delete-btn'))
    {
        task = e.target.parentElement;
        task.remove();
    }
});