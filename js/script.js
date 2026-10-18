let tasks = document.querySelectorAll(".task");

let container = document.querySelector("#tasks");


let original = [...tasks];

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const input = document.querySelector("#search");

function show(list) {
  container.innerHTML = "";
  for (let i in list) {
    container.append(list[i]);
  }
}

function compare(a, b) {
  if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
  if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
  if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}

function compareReverse(a, b) {
  if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;
  if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
  if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1;
}

document.querySelector("#add").addEventListener("click", function () {
  let text = document.querySelector("#newTask").value.trim();
  if (text === "") return;
  let task = document.createElement("div");
  task.className = "task";
  let span = document.createElement("span");
  span.textContent = text;
  task.append(span);
  original.push(task);
  container.append(task);
  document.querySelector("#newTask").value = "";
});

btn1.addEventListener("click", function () {
  let newTasks = [...original].sort(compare);
  show(newTasks);
});

btn2.addEventListener("click", function () {
  let newTasks = [...original].sort(compareReverse);
  show(newTasks);
});

btn3.addEventListener("click", function () {
  let newTasks = [...original];
  newTasks = newTasks.filter(function (item) {
    return item.classList.contains("immediate");
  });
  show(newTasks);
});

btn4.addEventListener("click", function () {
  let value = input.value;
  let newTasks = [...original];
  newTasks = newTasks.filter(function (item) {
    return item.querySelector("span").innerHTML.indexOf(value) != -1;
  });
  show(newTasks);
});

btn5.addEventListener("click", function () {
  input.value = "";
  show(original);
});
