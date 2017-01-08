/**
 * Created by Mateusz on 08.01.2017.
 */

var todoList = {
    todos: [],

    displayTodos: function () {
        if (this.todos.length !== 0)
            for (var i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i];
                if (todo.completed === true)
                    console.log('(X)', todo.todoText)
                else
                    console.log('( )', todo.todoText)
            }
        else
            console.log("Your list is empty!")
    },

    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        })
    },

    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1)
    },

    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed
    },

    getCompletedTodos: function () {
        var completedTodos = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed)
                completedTodos++
        }

        return completedTodos
    },

    toogleAllto: function (bool) {
        for (var i = 0; i < this.todos.length; i++)
            this.todos[i].completed = bool
    },

    toogleAll: function () {
        if (this.todos.length === this.getCompletedTodos())
            this.toogleAllto(false)
        else
            this.toogleAllto(true)
    }

};

var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toogleAll();
        view.displayTodos();
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value="";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(parseInt(changeTodoPositionInput.value),changeTodoTextInput.value)
        changeTodoTextInput.value="";
        changeTodoPositionInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(parseInt(toggleCompletedPositionInput.value));
        toggleCompletedPositionInput.value="";
        view.displayTodos();
    }
};


//Nie ma zadnej logiki itp, odpowiada tylko za to co widzi uzytkownik
var view = {
    displayTodos:function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        for(var i=0;i<todoList.todos.length;i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];

            var todoTextWithCompletion = '';
            if(todo.completed)
                todoTextWithCompletion = '(X) ' + todo.todoText;
            else
                todoTextWithCompletion = '( ) ' + todo.todoText;

            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }

    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click',function (event) {
            var elementClicked = event.target;
            if(elementClicked.className === 'deleteButton'){
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();

function runWithDebugger(ourFunction){
    debugger;
    ourFunction();
}