let btn = document.querySelector("input.add");
let entredTask = document.querySelector("input.input");
let tasksDiv = document.querySelector("div.tasks");

const contentArray = JSON.parse(localStorage.getItem("tasks"));

function createPageElements(contentArray, i) {
  let taskItemDiv = document.createElement("div");
  let taskContentDiv = document.createElement("div");
  let taskContentTxt = document.createTextNode(contentArray[i].title);
  let deleteButton = document.createElement("button");
  taskItemDiv.className = "taskItem";
  taskContentDiv.className = "task-content";
  deleteButton.className = "delete";
  deleteButton.innerText = "Delete Task";
  taskContentDiv.append(taskContentTxt);
  taskItemDiv.append(taskContentDiv);
  taskItemDiv.append(deleteButton);
  // document.body.append(taskItemDiv)
  tasksDiv.append(taskItemDiv);
}

function deleteItem() {
  let deleteBtns = document.querySelectorAll("button.delete");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.currentTarget.parentElement.remove();
      let newArray = contentArray.filter(function (ele) {
        return ele.title !== btn.previousElementSibling.innerText;
      });
      window.localStorage.setItem("tasks", JSON.stringify(newArray));
    });
  });
}

// window.localStorage.clear();
window.onload = function () {
  if (window.localStorage) {
    for (let i = 0; i < contentArray.length; i++) {
      createPageElements(contentArray, i);
    }

    deleteItem();
  }
};

btn.onclick = function () {
  //creating elements on screen
  function createElements() {}
  if (entredTask.value !== "") {
    let taskItemDiv = document.createElement("div");
    let taskContentDiv = document.createElement("div");
    let taskContentTxt = document.createTextNode(entredTask.value);
    let deleteButton = document.createElement("button");
    taskItemDiv.className = "taskItem";
    taskContentDiv.className = "task-content";
    deleteButton.className = "delete";
    deleteButton.innerText = "Delete Task";
    taskContentDiv.append(taskContentTxt);
    taskItemDiv.append(taskContentDiv);
    taskItemDiv.append(deleteButton);
    // document.body.append(taskItemDiv)
    tasksDiv.append(taskItemDiv);
    //--end of creat element
    if (!localStorage.tasks) {
      var tasksArray = [];
      localStorage.setItem("tasks", tasksArray);
    } else {
      var tasksArray = JSON.parse(localStorage.getItem("tasks"));
    }

    var task = {
      id: Math.floor(Math.random() * 10000000000),
      title: entredTask.value,
    };

    tasksArray.push(task);

    window.localStorage.setItem("tasks", JSON.stringify(tasksArray));

    entredTask.value = "";

    deleteItem();
  }
};
