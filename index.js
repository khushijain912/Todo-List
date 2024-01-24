// function addTask() {
//   var taskInput = document.getElementById("taskInput");
//   var taskList = document.getElementById("taskList");

//   if (taskInput.value.trim() === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   // Create new task element
//   var li = document.createElement("li");
//   li.className = "task";

// //   var taskText = document.createTextNode(taskInput.value);
//   var taskDiv = document.createElement("div");
//   taskDiv.classList.add("taskDiv");
//   var taskText = document.createElement("p");
//   taskText.classList.add("text");
//   taskText.innerText = taskInput.value;

//   taskDiv.style.display = "flex";
//   taskDiv.style.alignItems = "flex-start";
//   taskDiv.appendChild(taskText);

//   li.appendChild(taskDiv);

//   // Add delete button
//   var deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("delete");
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.onclick = function () {
//     li.remove();
//   };
//   li.appendChild(deleteBtn);

//   // Add edit button
//   var editBtn = document.createElement("button");
//   editBtn.classList.add("edit");
//   editBtn.innerHTML = "Edit";
//   editBtn.onclick = function () {
//     // var newText = prompt("Edit task:", taskInput.value);
//     // if (newText !== null) {
//     //   taskText.nodeValue = newText;
//     // }
//   };
//   li.appendChild(editBtn);

//   var saveBtn = document.createElement("button");
//   saveBtn.classList.add("save");
//   saveBtn.innerHTML = "Save";
//   saveBtn.onclick = function () {
//   };
//   li.appendChild(saveBtn);

//   // Add task to the list
//   taskList.appendChild(li);

//   // Clear input field
//   taskInput.value = "";
// }

/////////////////////////////////////////////////////////

// function addTask() {
//   var taskInput = document.getElementById("taskInput");
//   var taskList = document.getElementById("taskList");

//   if (taskInput.value.trim() === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   // Create new task element
//   var li = document.createElement("li");
//   li.className = "task";

//   var taskDiv = document.createElement("div");
//   taskDiv.classList.add("taskDiv");

//   var taskText = document.createElement("p");
//   taskText.classList.add("text");
//   taskText.innerText = taskInput.value;

//   taskDiv.style.display = "flex";
//   taskDiv.style.alignItems = "flex-start";
//   taskDiv.appendChild(taskText);

//   // Input field for editing
//   var editInput = document.createElement("input");
//   editInput.type = "text";
//   editInput.value = taskInput.value;
//   editInput.style.display = "none"; // Initially hide the input field
//   editInput.style.marginLeft = "0px";
//   li.appendChild(taskDiv);
//   li.appendChild(editInput); // Append the input field to the list item

//   // Add delete button
//   var deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("delete");
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.onclick = function () {
//     li.remove();
//   };
//   li.appendChild(deleteBtn);

//   // Add edit button
//   var editBtn = document.createElement("button");
//   editBtn.classList.add("edit");
//   editBtn.innerHTML = "Edit";
//   editBtn.onclick = function () {
//     // Toggle visibility of text and input for editing
//     taskText.style.display = "none";
//     editInput.style.display = "block";
//     saveBtn.style.display = "block";
//     editBtn.style.display = "none";

//     // Set focus to the input field for editing
//     editInput.focus();
//   };
//   li.appendChild(editBtn);

//   // Add save button
//   var saveBtn = document.createElement("button");
//   saveBtn.classList.add("save");
//   saveBtn.innerHTML = "Save";
//   saveBtn.style.display = "none"; // Initially hide the save button

//   saveBtn.onclick = function () {
//     // Save the edited content
//     taskText.innerText = editInput.value;

//     // Toggle visibility of text and input after saving
//     taskText.style.display = "block";
//     editInput.style.display = "none";
//     saveBtn.style.display = "none";
//     editBtn.style.display = "block";
//   };

//   li.appendChild(saveBtn);

//   // Add task to the list
//   taskList.appendChild(li);

//   // Clear input field
//   taskInput.value = "";
// }

/////////////////////////////////////////////////

// function addTask() {
//   var taskInput = document.getElementById("taskInput");
//   var taskList = document.getElementById("taskList");

//   if (taskInput.value.trim() === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   // Create new task element
//   var li = document.createElement("li");
//   li.className = "task";

//   // Input field for editing
//   var editInput = document.createElement("input");
//   editInput.type = "text";
//   editInput.value = taskInput.value;
//   editInput.style.display = "none"; // Initially hide the input field

//   // Add save button
//   var saveBtn = document.createElement("button");
//   saveBtn.classList.add("save");
//   saveBtn.innerHTML = "Save";
//   saveBtn.style.display = "none"; // Initially hide the save button

//   saveBtn.onclick = function () {
//     // Save the edited content
//     taskText.innerText = editInput.value;

//     // Toggle visibility of text and input after saving
//     taskText.style.display = "block";
//     editInput.style.display = "none";
//     saveBtn.style.display = "none";
//     editBtn.style.display = "block";
//   };

//   // Add delete button
//   var deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("delete");
//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.onclick = function () {
//     li.remove();
//   };
//   li.appendChild(deleteBtn);

//   // Add edit button
//   var editBtn = document.createElement("button");
//   editBtn.classList.add("edit");
//   editBtn.innerHTML = "Edit";
//   editBtn.onclick = function () {
//     // Toggle visibility of text and input for editing
//     taskText.style.display = "none";
//     editInput.style.display = "block";
//     saveBtn.style.display = "block";
//     editBtn.style.display = "none";

//     // Set focus to the input field for editing
//     editInput.focus();
//   };

//   li.appendChild(editInput); // Append the input field to the list item
//   li.appendChild(saveBtn);
//   li.appendChild(editBtn);

//   // Add task text element
//   var taskText = document.createElement("p");
//   taskText.classList.add("text");
//   taskText.innerText = taskInput.value;
//   li.appendChild(taskText);

//   // Add task to the list
//   taskList.appendChild(li);

//   // Clear input field
//   taskInput.value = "";
// }



function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Create new task element
  var li = document.createElement("li");
  li.className = "task";

  // Input field for editing
  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = taskInput.value;
  editInput.style.display = "none"; // Initially hide the input field

  // Add task text element
  //   var taskText = document.createTextNode(taskInput.value);
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    var taskText = document.createElement("p");
    taskText.classList.add("text");
    taskText.innerText = taskInput.value;

    taskDiv.style.display = "flex";
    taskDiv.style.alignItems = "flex-start";
    taskDiv.appendChild(taskText);

    // li.appendChild(taskDiv);

  // Add delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Add save button
  var saveBtn = document.createElement("button");
  saveBtn.classList.add("save");
  saveBtn.innerHTML = "Save";
  saveBtn.style.display = "none"; // Initially hide the save button

  saveBtn.onclick = function () {
    // Save the edited content
    taskText.innerText = editInput.value;

    // Toggle visibility of text and input after saving
    taskText.style.display = "block";
    editInput.style.display = "none";
    saveBtn.style.display = "none";
    editBtn.style.display = "block";
  };

  // Add edit button
  var editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "Edit";
  editBtn.onclick = function () {
    // Toggle visibility of text and input for editing
    taskText.style.display = "none";
    editInput.style.display = "block";
    saveBtn.style.display = "block";
    editBtn.style.display = "none";

    // Set focus to the input field for editing
    editInput.focus();
  };

  li.appendChild(editInput); // Append the input field to the list item
  li.appendChild(taskDiv);
  li.appendChild(deleteBtn);
  li.appendChild(saveBtn);
  li.appendChild(editBtn);

  // Add task to the list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
