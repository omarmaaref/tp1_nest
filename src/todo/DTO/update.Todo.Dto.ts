import { OmitType, PartialType } from '@nestjs/mapped-types';
import { TodoStatusEnum } from "../enums/todo-status.enum";
import { AddTodoDto } from "./Add.Todo.Dto";

export class UpdateTodoDto extends PartialType(AddTodoDto) {
  status: TodoStatusEnum;
}
