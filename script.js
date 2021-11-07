//Get user input
const user__input = document.querySelector(".heading");
const add__btn = document.querySelector(".add-btn");
const add_task_contanier = document.querySelector("#addTask");
const completed_task_contaneir = document.querySelector("#completedTasks");
const deleted_task_contanier = document.querySelector("#deletedTask");
const close_tab = document.querySelector("#add");
const close_tab_complete = document.querySelector("#done");
const close_tab_deleted = document.querySelector("#out");

const add_a_task = function () {
  if (user__input.value.length > 0) {
    //Adding a task on the add a task tab
    const html = `<div class="to-do">
      <div class="to-do--text">${user__input.value}</div>
      <i class="far fa-trash-alt"></i>
    </div>`;

    add_task_contanier.insertAdjacentHTML("beforeend", html);
    //Clearing input field
    user__input.value = "";
    user__input.focus();

    //deleting a to-do
    const copyTextDeleted = function (text) {
      const htmlDeleted = `<div class="to-do--deleted">
      <div class="to-do--text">${text}</div>
    </div>`;

      deleted_task_contanier.insertAdjacentHTML("beforeend", htmlDeleted);
    };
    const trash = document.querySelector(".fa-trash-alt");
    add_task_contanier.addEventListener("click", function (e) {
      if (e.target.includes == trash) {
        e.target.parentNode.remove();
      }
    });
    ///////////////FIRST METHOD AND IT HAVE ISSUES
    // trashs.forEach(function (trash) {
    //   trash.addEventListener("click", function () {
    //     console.log(this.parentNode.innerHTML);
    //     this.parentNode.remove();
    //   });
    // });
  } else {
    alert(`Please insert something on the add a task section`);
  }
};
add__btn.addEventListener("click", add_a_task);

//Implement minimise and maximise function for each tab
function minimizer(contanier, arrowId) {
  arrowId.addEventListener("click", function () {
    contanier.classList.toggle("close_tab");
    arrowId.classList.toggle("transform");
  });
}
minimizer(add_task_contanier, close_tab);
minimizer(completed_task_contaneir, close_tab_complete);
minimizer(deleted_task_contanier, close_tab_deleted);

//Get Current time

function todaysDate() {
  setInterval(function () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.querySelector(
      "#time"
    ).innerHTML = `Time : ${hours}: ${minutes}:${seconds}`;
  }, 1000);
}
todaysDate();
//Get Current date
let d = new Date();
const year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
if (day < 10) {
  day = "0" + day;
} else if (month < 10) {
  month = "0" + month;
}
document.querySelector(
  "#dateToday"
).innerHTML = `Today's Date: ${day}/${month}/${year}`;
