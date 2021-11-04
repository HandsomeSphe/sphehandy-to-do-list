//Get user input
const user__input = document.querySelector(".heading");
const add__btn = document.querySelector(".add-btn");
const add_task_contanier = document.querySelector("#addTask");

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
    const all_new_tasks = document.querySelectorAll(".to-do");
    all_new_tasks.forEach(function (el) {
      el.addEventListener("click", function () {
        this.parentNode.remove();
      });
    });
  } else {
    alert(`Please insert something on the add a task section`);
  }
};
add__btn.addEventListener("click", add_a_task);
