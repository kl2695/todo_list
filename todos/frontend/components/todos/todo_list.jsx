import React from "react";
import TodoListItem from "./todo_list_item.jsx";
import TodoForm from "./todo_form.jsx";

export const todoList = function(props) {



  const todos = function(){
    return props.todos.map(cb);
  };


  function cb(el){
    return (<TodoListItem todo = {el} removeTodo ={props.removeTodo}/>);
  }

  return (
    <div>
      <TodoForm receiveTodo = {props.receiveTodo} />

      <ul>
        {todos()}
      </ul>

    </div>
  );
};
