// ----- Selecting all elements
      let todo = document.querySelector(".todo-container");
      let task = document.querySelector("#taskInput");
      let addBtn = document.querySelector("#addTaskBtn");
      let showTask = document.querySelector("#taskList");

      // ---- Jb page reload ho mera jitne bh task save hai wo UI per display hojai
      window.addEventListener("DOMContentLoaded", () => {
        // ---- data fetch kr rahai hai local storage se
        setTimeout(() => {
        let dataExisting = localStorage.getItem("tasks");
        // data ko parse kia mtlb array me convert kia
        let dataParse = JSON.parse(dataExisting);
        // har aik task ko UI me display kia using foreach loop
        dataParse.forEach((task) => {
          let myTask = document.createElement("li");
          myTask.textContent = task;

          // Delete button creaeted
          let deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete Task";
          myTask.appendChild(deleteBtn);

          // Delete button event listener lagao
          deleteBtn.addEventListener("click", () => {
            myTask.remove();
          });
            showTask.appendChild(myTask);
        });
         }, 5000);
      });

      // --- add event on btn to add task and show tha all task inside ul container
      addBtn.addEventListener("click", () => {
        // ---- if task is empty show an alert box
        if (task.value === "") {
          alert("Please add a task!");
          return;
        }

        // ---- save the task on local storage
        let taskValue = task.value.trim(); // get the task value from input box and remove white spaces
        let exist = localStorage.getItem("tasks");
        // agr local storage me task name ki key ka data exist krta hai to usko ap parse krdo array me convert krdo agr nh to [] array banado
        let data = exist ? JSON.parse(exist) : [];
        // jo task input se arha hai usko push krdo data me
        data.push(taskValue);
        // end me data ko save krdo tasks apne or usko wapis stringify krdo
        localStorage.setItem("tasks", JSON.stringify(data));

        // ----- show all task to UI
        let myTask = document.createElement("li");
        myTask.textContent = task.value;
        myTask.classList.add("task-entry");
        showTask.appendChild(myTask);

        // ---- Delete Task from UI
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Task";
        myTask.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
          myTask.remove();
        });

        // ---- single task add krne kai bad input box empty hojai
        task.value = "";
      });