// 课时21
import {Injectable} from '@angular/core';
import {Todo} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private data: Todo[] = [
    {id: 999, description: 'for test purpose', category: 1, content: 'test'},
    {id: 998, description: 'for test purpose aaa', category: 1, content: 'test aaa'}
  ];

  constructor() {
  }

  getTodos(): Todo[] {
    return this.data;
  }

  delete(ids: number[]): Todo[] {
    this.data = this.data.filter(item => ids.indexOf(item.id) === -1);
    return this.data;
  }

  // 课时22
  getTodo(id: number): Todo {
    return this.data.find(item => item.id === id);
  }

  // 课时26
  addTodo(todo: Partial<Todo>): Todo[] {
    const id = parseInt(Math.random() * 1000000 + '', 10);
    const newTodo = {...todo, id} as Todo;
    this.data = [...this.data, newTodo];
    return this.data;
  }


}
