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
        todoList.displayTodos()
    },
    toggleAll: function () {
        todoList.toogleAll()
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value="";
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(parseInt(changeTodoPositionInput.value),changeTodoTextInput.value)
        changeTodoTextInput.value="";
        changeTodoPositionInput.value = "";
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(parseInt(deleteTodoPositionInput.value));
        deleteTodoPositionInput.value="";
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(parseInt(toggleCompletedPositionInput.value));
        toggleCompletedPositionInput.value="";
    }
};


//Nie ma zadnej logiki itp, odpowiada tylko za to co widzi uzytkownik
var view = {
    displayTodos:function () {
        var todosUl = document.querySelector('ul');

        for(var i=0;i<todoList.todos.length;i++){
            var todoLi = document.createElement('li');
            todosUl.appendChild(todoLi);
        }

    }
}