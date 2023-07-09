











const inputBox = document.getElementById("input-box");
const ulContainer = document.getElementById("ul-container");

function addtask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
  } else {
    const li = document.createElement("li");
    li.textContent = inputBox.value;
    ulContainer.appendChild(li);

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    saveData()
  }
}

ulContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }  else if (e.target.tagName === "SPAN") {
    const shouldRemove = confirm("Are you sure you want to remove this task?");
    if (shouldRemove) {
      e.target.parentElement.remove();
      saveData()
    }
  }
});


function saveData(){
    localStorage.setItem("data",ulContainer.innerHTML)
}

function showTask(){
    ulContainer.innerHTML = localStorage.getItem('data')
}

showTask()
