const images = [
    "https://placehold.co/600x350?text=Image+1",
    "https://placehold.co/600x350?text=Image+2",
    "https://placehold.co/600x350?text=Image+3",
    "https://placehold.co/600x350?text=Image+4",
    "https://placehold.co/600x350?text=Image+5",
    "https://placehold.co/600x350?text=Image+6",
    "https://placehold.co/600x350?text=Image+7",
    "https://placehold.co/600x350?text=Image+8",
    "https://placehold.co/600x350?text=Image+9"
];

let currentIndex = 0;
let isPlaying = false;
let slideTimer = null;
let selectedCommandIndex = 0;

const mainImage = document.querySelector("#mainImage");
const modalImage = document.querySelector("#modalImage");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const playBtn = document.querySelector("#playBtn");
const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const commandBtn = document.querySelector("#commandBtn");

const imageModal = document.querySelector("#imageModal");
const commandPalette = document.querySelector("#commandPalette");
const commandInput = document.querySelector("#commandInput");
const commandList = document.querySelector("#commandList");

const commands = [
    { name: "Next image", action: nextImage },
    { name: "Previous image", action: prevImage },
    { name: "Open modal", action: openModal },
    { name: "Close modal", action: closeModal },
    { name: "Play slideshow", action: startSlideshow },
    { name: "Pause slideshow", action: stopSlideshow }
];

function updateImage() {
    mainImage.src = images[currentIndex];
    mainImage.alt = "Gallery image " + (currentIndex + 1);
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateImage();
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateImage();
}

function goToImage(index) {
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        updateImage();
    }
}

function startSlideshow() {
    if (isPlaying) return;

    isPlaying = true;
    playBtn.textContent = "Pause";

    slideTimer = setInterval(function () {
        nextImage();
    }, 1000);
}

function stopSlideshow() {
    isPlaying = false;
    playBtn.textContent = "Play";
    clearInterval(slideTimer);
}

function toggleSlideshow() {
    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}

function openModal() {
    modalImage.src = images[currentIndex];
    imageModal.classList.remove("hidden");
    closeModalBtn.focus();
}

function closeModal() {
    imageModal.classList.add("hidden");
    openModalBtn.focus();
}

function openCommandPalette() {
    commandPalette.classList.remove("hidden");
    commandInput.value = "";
    selectedCommandIndex = 0;
    renderCommands(commands);
    commandInput.focus();
}

function closeCommandPalette() {
    commandPalette.classList.add("hidden");
    commandBtn.focus();
}

function renderCommands(list) {
    commandList.textContent = "";

    list.forEach(function (command, index) {
        const li = document.createElement("li");
        li.textContent = command.name;
        li.tabIndex = 0;

        if (index === selectedCommandIndex) {
            li.classList.add("active");
        }

        li.addEventListener("click", function () {
            command.action();
            closeCommandPalette();
        });

        commandList.appendChild(li);
    });
}

function getFilteredCommands() {
    const keyword = commandInput.value.toLowerCase();

    return commands.filter(function (command) {
        return command.name.toLowerCase().includes(keyword);
    });
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
playBtn.addEventListener("click", toggleSlideshow);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
commandBtn.addEventListener("click", openCommandPalette);

commandInput.addEventListener("input", function () {
    selectedCommandIndex = 0;
    renderCommands(getFilteredCommands());
});

commandInput.addEventListener("keydown", function (e) {
    const filtered = getFilteredCommands();

    if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedCommandIndex++;

        if (selectedCommandIndex >= filtered.length) {
            selectedCommandIndex = 0;
        }

        renderCommands(filtered);
    }

    if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedCommandIndex--;

        if (selectedCommandIndex < 0) {
            selectedCommandIndex = filtered.length - 1;
        }

        renderCommands(filtered);
    }

    if (e.key === "Enter") {
        e.preventDefault();

        if (filtered[selectedCommandIndex]) {
            filtered[selectedCommandIndex].action();
            closeCommandPalette();
        }
    }
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCommandPalette();
        return;
    }

    if (e.key === "Escape") {
        if (!imageModal.classList.contains("hidden")) {
            closeModal();
        }

        if (!commandPalette.classList.contains("hidden")) {
            closeCommandPalette();
        }

        return;
    }

    if (!commandPalette.classList.contains("hidden")) {
        return;
    }

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    if (e.key === " ") {
        e.preventDefault();
        toggleSlideshow();
    }

    const number = Number(e.key);

    if (number >= 1 && number <= 9) {
        goToImage(number - 1);
    }
});

updateImage();