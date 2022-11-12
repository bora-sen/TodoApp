const App = document.getElementById("App");
let my_ul = document.createElement('ul');
my_ul.classList.add('TodoList');
class Todo {
	constructor(disc){
		this.disc = disc;
		this.id = Math.floor(Math.random() * 10000)
		this.isdone = false;
	}
}
let Todos = [];

function CreateTodoObject(disc){
	let todo_obj = new Todo(disc);
}

function CreateTodoLiElement(ul_element, disc) {
	let todo__li = document.createElement('li');
	todo__li.innerText =disc;
	todo__li.classList.add("todo__li");
	ul_element.appendChild(todo__li);
	let todo_done_btn = document.createElement('button');
	todo_done_btn.innerText = "Done";
	todo_done_btn.addEventListener("click", function() {
		console.log("Clicked Done Button...");
		todo__li.classList.toggle('todo__done');
		event.preventDefault();
	})
	todo__li.appendChild(todo_done_btn);
}

App.appendChild(my_ul);


let AddTodoForm = document.createElement('form');
AddTodoForm.classList.add("Add_Todo_Form__form");

let AddTodoFormTextInput = document.createElement('input');
AddTodoFormTextInput.type = "text";

let AddTodoButton = document.createElement('button');
AddTodoButton.innerText="Add Todo";
AddTodoButton.addEventListener("click",function () {
	CreateTodoLiElement(my_ul,AddTodoFormTextInput.value)
	event.preventDefault();
	AddTodoFormTextInput.value = "";
	AddTodoFormTextInput.focus();
});

AddTodoForm.appendChild(AddTodoFormTextInput);
AddTodoForm.appendChild(AddTodoButton);

App.appendChild(AddTodoForm);







