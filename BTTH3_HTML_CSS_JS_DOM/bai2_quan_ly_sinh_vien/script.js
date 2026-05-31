const btnAdd = document.getElementById("btnAdd");
const btnClose = document.getElementById("btnClose");
const modal = document.getElementById("modal");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

const formTitle = document.getElementById("formTitle");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");
const completedInput = document.getElementById("completed");

const totalTasks = document.getElementById("totalTasks");
const doneTasks = document.getElementById("doneTasks");
const undoneTasks = document.getElementById("undoneTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showMessage(text) {
    message.textContent = text;

    setTimeout(function () {
        message.textContent = "";
    }, 2000);
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    resetForm();
}

function resetForm() {
    taskForm.reset();
    editId = null;
    formTitle.textContent = "Thêm công việc";
}

function updateStatistics() {
    totalTasks.textContent = tasks.length;

    let done = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            done++;
        }
    }

    doneTasks.textContent = done;
    undoneTasks.textContent = tasks.length - done;
}

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "Chưa có công việc nào.";
        taskList.appendChild(empty);
        updateStatistics();
        return;
    }

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const card = document.createElement("div");
        card.className = "task-card";

        if (task.completed) {
            card.classList.add("done");
        }

        const header = document.createElement("div");
        header.className = "task-header";

        const title = document.createElement("h3");
        title.textContent = task.title;

        const priority = document.createElement("span");
        priority.className = "priority " + task.priority;
        priority.textContent = task.priority;

        header.appendChild(title);
        header.appendChild(priority);

        const description = document.createElement("p");
        description.textContent = task.description;

        const deadline = document.createElement("p");
        deadline.textContent = "Hạn hoàn thành: " + task.deadline;

        const status = document.createElement("p");
        status.textContent = task.completed ? "Trạng thái: Đã hoàn thành" : "Trạng thái: Chưa hoàn thành";

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const btnToggle = document.createElement("button");
        btnToggle.className = "btn-toggle";
        btnToggle.textContent = task.completed ? "Chưa hoàn thành" : "Hoàn thành";
        btnToggle.onclick = function () {
            toggleTask(task.id);
        };

        const btnEdit = document.createElement("button");
        btnEdit.className = "btn-edit";
        btnEdit.textContent = "Sửa";
        btnEdit.onclick = function () {
            editTask(task.id);
        };

        const btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete";
        btnDelete.textContent = "Xóa";
        btnDelete.onclick = function () {
            deleteTask(task.id);
        };

        actions.appendChild(btnToggle);
        actions.appendChild(btnEdit);
        actions.appendChild(btnDelete);

        card.appendChild(header);
        card.appendChild(description);
        card.appendChild(deadline);
        card.appendChild(status);
        card.appendChild(actions);

        taskList.appendChild(card);
    }

    updateStatistics();
}

function addTask(task) {
    tasks.push(task);
    saveTasks();
    renderTasks();
    showMessage("Thêm công việc thành công!");
}

function updateTask(id, newTask) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i] = newTask;
            break;
        }
    }

    saveTasks();
    renderTasks();
    showMessage("Cập nhật công việc thành công!");
}

function editTask(id) {
    const task = tasks.find(function (item) {
        return item.id === id;
    });

    if (!task) {
        return;
    }

    editId = id;

    titleInput.value = task.title;
    descriptionInput.value = task.description;
    deadlineInput.value = task.deadline;
    priorityInput.value = task.priority;
    completedInput.checked = task.completed;

    formTitle.textContent = "Sửa công việc";
    openModal();
}

function deleteTask(id) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa công việc này không?");

    if (!confirmDelete) {
        return;
    }

    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();
    renderTasks();
    showMessage("Xóa công việc thành công!");
}

function toggleTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }

    saveTasks();
    renderTasks();
    showMessage("Cập nhật trạng thái thành công!");
}

btnAdd.addEventListener("click", function () {
    resetForm();
    openModal();
});

btnClose.addEventListener("click", function () {
    closeModal();
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;
    const completed = completedInput.checked;

    if (title === "" || description === "" || deadline === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const task = {
        id: editId || Date.now(),
        title: title,
        description: description,
        deadline: deadline,
        priority: priority,
        completed: completed
    };

    if (editId === null) {
        addTask(task);
    } else {
        updateTask(editId, task);
    }

    closeModal();
});

renderTasks();