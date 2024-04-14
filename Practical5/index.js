const imageGallery = document.getElementById("image-gallery");
const faqSection = document.getElementById("FAQ-section");
const taskBoard = document.getElementById("task-board");

// dropdown

const showGallery = document.getElementById("show-gallery");
const showFAQ = document.getElementById("show-FAQ");
const showTaskBoard = document.getElementById("show-taskboard");

document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.getElementsByClassName("dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("mouseenter", function () {
      this.getElementsByClassName("dropdown-content")[0].style.display =
        "block";
    });
    dropdowns[i].addEventListener("mouseleave", function () {
      this.getElementsByClassName("dropdown-content")[0].style.display = "none";
    });
  }
});

showGallery.addEventListener("click", () => {
  imageGallery.style.display = "flex";
  faqSection.style.display = "none";
  taskBoard.style.display = "none";
});

showFAQ.addEventListener("click", () => {
  imageGallery.style.display = "none";
  faqSection.style.display = "block";
  taskBoard.style.display = "none";
});

showTaskBoard.addEventListener("click", () => {
  imageGallery.style.display = "none";
  faqSection.style.display = "none";
  taskBoard.style.display = "block";
});

// gallery
function showImage(image) {
  document.getElementById("mainImage").src = image;
}

// faq
function toggleAnswer(id) {
  var answer = document.getElementById("answer" + id);
  var question = document.querySelector(
    ".faq-item:nth-child(" + id + ") .question"
  );

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    question.classList.remove("active");
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    question.classList.add("active");
  }
}

// taskboard
document.addEventListener("DOMContentLoaded", function () {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
  });

  const columns = document.querySelectorAll(".task-column");

  columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
  });
});

let draggedTask = null;

function dragStart() {
  draggedTask = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  draggedTask.style.display = "block";
  draggedTask = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function drop() {
  this.appendChild(draggedTask);
  this.classList.remove("over");
}
