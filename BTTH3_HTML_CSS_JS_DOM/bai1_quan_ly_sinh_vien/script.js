const btnAdd = document.getElementById("btnAdd");
const btnClose = document.getElementById("btnClose");
const modal = document.getElementById("modal");
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
const message = document.getElementById("message");
const totalStudents = document.getElementById("totalStudents");
const avgScore = document.getElementById("avgScore");
const formTitle = document.getElementById("formTitle");
const btnSave = document.getElementById("btnSave");

const studentId = document.getElementById("studentId");
const fullName = document.getElementById("fullName");
const birthDate = document.getElementById("birthDate");
const className = document.getElementById("className");
const score = document.getElementById("score");
const email = document.getElementById("email");

let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
    studentTableBody.innerHTML = "";

    if (students.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="7">Chưa có sinh viên nào</td>
            </tr>
        `;
        updateStatistics();
        return;
    }

    students.forEach((student, index) => {
        studentTableBody.innerHTML += `
            <tr>
                <td>${student.studentId}</td>
                <td>${student.fullName}</td>
                <td>${student.birthDate}</td>
                <td>${student.className}</td>
                <td>${student.score}</td>
                <td>${student.email}</td>
                <td>
                    <button class="btn-edit" onclick="editStudent(${index})">Sửa</button>
                    <button class="btn-delete" onclick="deleteStudent(${index})">Xóa</button>
                </td>
            </tr>
        `;
    });

    updateStatistics();
}

function updateStatistics() {
    totalStudents.innerText = students.length;

    if (students.length === 0) {
        avgScore.innerText = "0";
        return;
    }

    let totalScore = students.reduce((sum, student) => {
        return sum + Number(student.score);
    }, 0);

    avgScore.innerText = (totalScore / students.length).toFixed(2);
}

function resetForm() {
    studentForm.reset();
    editIndex = -1;
    formTitle.innerText = "Thêm sinh viên";
    btnSave.innerText = "Lưu";
}

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    resetForm();
}

btnAdd.addEventListener("click", function () {
    resetForm();
    openModal();
});

btnClose.addEventListener("click", function () {
    closeModal();
});

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const student = {
        studentId: studentId.value,
        fullName: fullName.value,
        birthDate: birthDate.value,
        className: className.value,
        score: score.value,
        email: email.value
    };

    if (editIndex === -1) {
        students.push(student);
        message.innerText = "Thêm sinh viên thành công!";
    } else {
        students[editIndex] = student;
        message.innerText = "Cập nhật sinh viên thành công!";
    }

    saveStudents();
    renderStudents();
    closeModal();
});

function editStudent(index) {
    editIndex = index;

    const student = students[index];

    studentId.value = student.studentId;
    fullName.value = student.fullName;
    birthDate.value = student.birthDate;
    className.value = student.className;
    score.value = student.score;
    email.value = student.email;

    formTitle.innerText = "Cập nhật sinh viên";
    btnSave.innerText = "Cập nhật";

    openModal();
}

function deleteStudent(index) {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");

    if (confirmDelete) {
        students.splice(index, 1);
        saveStudents();
        renderStudents();
        message.innerText = "Xóa sinh viên thành công!";
    }
}

renderStudents();
