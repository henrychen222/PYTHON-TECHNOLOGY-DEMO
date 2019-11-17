/**
 * 课时 13-17
 * */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../interface';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * ?: 可选字段  optional
 * : 不可选字段 non-optional
 * https://stackoverflow.com/questions/54815790/what-is-the-exact-difference-between-and-operators-in-angular
 * */
interface PrivateTodo extends Todo {
  selected?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // 课时20
  @Input()
  todos: PrivateTodo[];

  @Output()
  delete: EventEmitter<number[]> = new EventEmitter();

  // todos: PrivateTodo[] = [
  //   {id: 999, description: 'for test purpose', category: 1, content: 'test'},
  //   {id: 998, description: 'for test purpose aaa', category: 1, content: 'test aaa'},
  //   {id: 997, description: 'for test purpose bbb', category: 1, content: 'test bbb'}  // 课时18添加
  // ];

  // selectAll = true;
  selectAll = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  // delete(ids: number[]) {
  //   this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  // }

  toggleAll() {
    console.log(this.selectAll);
    this.todos.forEach(item => item.selected = this.selectAll);
  }

  checked() {
    this.selectAll = this.todos.every(item => item.selected);
  }

  deleteSelected() {
    const ids = this.todos.filter(item => item.selected).map(item => item.id);
    // this.delete(ids);
    this.delete.next(ids);  // 通过next() output
  }

  // 课时19
  navigateTo(todo: PrivateTodo, event: MouseEvent) {
    // if 判断解决点击 checkbox 也会跳转这个bug, 只有点击的是HTMLTableCellElement才会跳转
    if (event.target instanceof HTMLTableCellElement) {
      this.router.navigate([todo.id], {relativeTo: this.route});
    }
  }

}
