const input = document.querySelector("#input-text");
const listContainer = document.querySelector("#list-Container");
const button = document.querySelector("button");
const completedListdiv = document.querySelector("#completed-List-Container");
const completedToDoSection = document.querySelector("#CompletedToDo");

let listArray = [];
let completedList = [];

button.addEventListener("click", (e) => {
    if (input.value === '') {
        alert("Enter a Task and then click Add");
    } else if (listArray.includes(input.value)) {
        alert("Task already exists");
        return;
    } else {

        listArray.push(input.value);
        let li = document.createElement("li");
        li.innerHTML = input.value;
        let span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    input.value = "";
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {

        e.target.classList.toggle("checked");

        if (e.target.classList.contains("checked")) {
            const completedTask = e.target.innerText.replace("✖", "").trim();
            e.target.remove();
            listArray = listArray.filter(item => item !== completedTask);

            completedList.push(completedTask);

            let li = document.createElement("li");
            li.innerHTML = completedTask;

            let span = document.createElement("span");
            span.innerHTML = "&#10006";
            li.appendChild(span);
            completedListdiv.appendChild(li);

            if (completedList.length > 0) {
                completedToDoSection.style.display = "block";
            }
        }
    } else if (e.target.tagName === "SPAN") {

        const taskToRemove = e.target.parentElement.innerText.replace("✖", "").trim();
        e.target.parentElement.remove();
        listArray = listArray.filter(item => item !== taskToRemove);
    }
});

completedListdiv.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {

        const taskToRemove = e.target.parentElement.innerText.replace("✖", "").trim();
        e.target.parentElement.remove();
        completedList = completedList.filter(item => item !== taskToRemove);

        if (completedList.length === 0) {
            completedToDoSection.style.display = "none";
        }
    }
});
