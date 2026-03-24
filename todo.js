// 3. Load tasks from Local Storage when page opens
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;
    if (!taskText) return;

    const taskObj = { text: taskText, completed: false };
    
    renderTask(taskObj);
    saveToLocalStorage(taskObj);
    
    input.value = "";
}

// Function to draw the task on the screen
function renderTask(taskObj) {
    const li = document.createElement("li");
    if (taskObj.completed) li.classList.add('completed');

    const span = document.createElement("span");
    span.innerText = taskObj.text;
    span.onclick = () => {
        li.classList.toggle('completed');
        toggleStatusInStorage(taskObj.text);
    };

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "del-btn";
    delBtn.onclick = () => {
        li.remove();
        removeFromStorage(taskObj.text);
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("list").appendChild(li);
}

// --- Local Storage Functions ---

function saveToLocalStorage(task) {
    let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    tasks.forEach(task => renderTask(task));
}

function removeFromStorage(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(t => t.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleStatusInStorage(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find(t => t.text === text);
    if(task) task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
