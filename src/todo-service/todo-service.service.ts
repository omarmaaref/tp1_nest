import { Injectable, NotFoundException } from "@nestjs/common";

import { v4 as uuidv4 } from "uuid";
import { Todo } from "../todo/Model/todo.model";
import { AddTodoDto } from "../todo/DTO/Add.Todo.Dto";
import { UpdateTodoDto } from "../todo/DTO/update.Todo.Dto";



@Injectable()
export class TodoServiceService {
  todos: Todo[] = [];
  getTodo(id: string){
    const todo = this.todos.find(e => e.id == id);
    if (todo == null) throw new NotFoundException("todo not found");
    return todo; }

  getTodos(): Todo[] {
    return this.todos;
  }
  addToDo(newtodo: AddTodoDto): AddTodoDto {
    let todo = new Todo();
    const myuuid = uuidv4();
    todo.id = myuuid;
    todo = { ...todo, ...newtodo };
    this.todos.push(todo);
    return todo;
  }
  delTodo(id: string) {
    this.todos = this.todos.filter(e => e.id != id);  }

  updateTodo(id: string, updatedtodo: UpdateTodoDto) {
    let todo=this.getTodo(id);
    todo =  { ...todo, ...updatedtodo };
    this.delTodo(id);
    this.todos.push(todo)
    return todo;
  }
}
