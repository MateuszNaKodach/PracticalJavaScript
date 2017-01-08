/**
 * Created by Mateusz on 08.01.2017.
 */

var todoList = {
    todos: [],

    displayTodos: function(){
        if(this.todos.length !== 0)
            for(var i = 0; i <this.todos.length; i++) {
                var todo = this.todos[i];
                if(todo.completed === true)
                    console.log('(X)',todo.todoText)
                else
                    console.log('( )',todo.todoText)
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

    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText
    },

    deleteTodo: function(position){
        this.todos.splice(position,1)
    },

    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed
    },

    getCompletedTodos: function(){
        var completedTodos = 0;
        for(var i=0;i<this.todos.length;i++){
            if(this.todos[i].completed)
                completedTodos++
        }

        return completedTodos
    },

    toogleAllto:function(bool){
        for(var i = 0; i<this.todos.length;i++)
            this.todos[i].completed=bool
    },

    toogleAll: function() {
        if (this.todos.length === this.getCompletedTodos())
            this.toogleAllto(false)
        else
            this.toogleAllto(true)
    }

};




todoList.displayTodos()
todoList.addTodo("Isc zaraz spac")
todoList.addTodo("Pojde spac o 1")
todoList.toggleCompleted(0)
todoList.toggleCompleted(1)
todoList.displayTodos()
todoList.toogleAll()
todoList.displayTodos()