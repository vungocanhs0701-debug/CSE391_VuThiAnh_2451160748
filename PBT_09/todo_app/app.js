const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const count = document.querySelector("#count");
const clearCompletedBtn = document.querySelector("#clearCompleted");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    todoList.textContent = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.dataset.id = todo.id;

        if (todo.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "❌";

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    updateCount();
}

function updateCount() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    count.textContent = `${activeCount} items left`;
}

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = todoInput.value.trim();

    if (text === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    todoInput.value = "";
    saveTodos();
    renderTodos();
});

todoList.addEventListener("click", function (e) {
    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
        return;
    }

    if (e.target.classList.contains("todo-text")) {
        const todo = todos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
});

todoList.addEventListener("dblclick", function (e) {
    if (!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);
    const todo = todos.find(todo => todo.id === id);

    const input = document.createElement("input");
    input.className = "edit-input";
    input.value = todo.text;

    li.replaceChild(input, e.target);
    input.focus();

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const newText = input.value.trim();

            if (newText !== "") {
                todo.text = newText;
                saveTodos();
                renderTodos();
            }
        }
    });
});

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", function () {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

renderTodos();