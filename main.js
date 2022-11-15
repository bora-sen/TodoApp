//Creating Elements
const App = document.getElementById("App");
const TopSection = document.createElement("div");
TopSection.classList.add("top-section");
const ListElement = document.createElement("ul");
ListElement.classList.add("todo-list")
TopSection.appendChild(ListElement);
App.appendChild(TopSection);

const InputForm = document.createElement("form");
InputForm.classList.add("input-form");

const InputField = document.createElement("input");
InputField.classList.add("Inputfield")
InputField.type = "text";
InputForm.appendChild(InputField);
const InputButton = document.createElement("button");
InputButton.classList.add("add-todo-btn");
InputButton.innerText = "Add Todo";
InputForm.appendChild(InputButton);
App.appendChild(InputForm);

class Todo {
	constructor(title){this.title = title;}
	render(){
		let li_item = document.createElement("li");
		li_item.innerText = this.title;
		li_item.classList.add("todo__li");
		let li_btn = document.createElement("button");
		li_btn.classList.add("todo__btn");
		li_btn.innerText = "Done";
		li_btn.addEventListener("click",e => {
			li_item.classList.toggle("todo-done");
			e.preventDefault();
		})
		li_item.appendChild(li_btn)
		return li_item;
	}
}
InputButton.addEventListener("click", (e) => {
	e.preventDefault();	
	let new_todo_object = new Todo(InputField.value);
	ListElement.appendChild(new_todo_object.render());
	InputField.value="";
	InputField.focus();
	console.log("clicked");
})
