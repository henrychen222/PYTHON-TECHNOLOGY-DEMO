import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../interface';
import {TodoService} from '../provider/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todoList: Todo[] = [
  //   {id: 999, description: 'for test purpose', category: 1, content: 'test'},
  //   {id: 998, description: 'for test purpose aaa', category: 1, content: 'test aaa'}
  // ];

  //  课时 21 通过服务获取数据
  todoList: Todo[];

  // todoList2: Todo[] = [
  //   {id: 999, description: '22222', category: 1, content: 'test'},
  //   {id: 998, description: '33333', category: 1, content: 'test aaa'}
  // ];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

  delete(ids: number[]) {
    // this.todoList = this.todoList.filter(item => ids.indexOf(item.id) === -1);
    this.todoList = this.todoService.delete(ids);
  }

  // delete2(ids: number[]) {
  //   this.todoList2 = this.todoList2.filter(item => ids.indexOf(item.id) === -1);
  // }

  /** 课时 26*/
  add(data: Partial<Todo>) {
    this.todoList = this.todoService.addTodo(data);
  }

}
