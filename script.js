// const liList = document.querySelectorAll("li");

// liList.forEach((li) => {
//   li.addEventListener("click", () => {
//     li.classList.toggle("checked");
//   });
// });


// const inputBox = document.getElementById("input-box");

// const btn = document.getElementById("btn");


// const ul = document.getElementById('ul-container')
// console.log(ul)


// function addtask() {
//   if (inputBox.value === "") {
//     alert("ddddddddd")
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     ul.appendChild(li);

//     let span = document.createElement("span")
//     span.innerHTML = "\u00d7"
//     li.appendChild(span)
//   }

//   inputBox.value = " ";
// }


// ul.addEventListener("click",(e)=>{
//     if(e.target.tagName === 'Li'){
//         e.target.classList.toggle("checked")
//     } else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }
// },false)







// const inputBox = document.getElementById("input-box");
// const ulContainer = document.getElementById("ul-container");

// function addtask() {
//   if (inputBox.value.trim() === "") {
//     alert("Please enter a task!");
//   } else {
//     const li = document.createElement("li");
//     li.textContent = inputBox.value;
//     ulContainer.appendChild(li);

//     const span = document.createElement("span");
//     span.textContent = "\u00d7";
//     li.appendChild(span);

//     inputBox.value = "";
//   }
// }

// ulContainer.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//   }
// });


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