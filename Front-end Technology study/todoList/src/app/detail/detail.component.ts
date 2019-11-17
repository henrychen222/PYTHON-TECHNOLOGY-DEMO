// 课时23
import {Component, OnInit} from '@angular/core';
import {Todo} from '../interface';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../provider/todo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoServe: TodoService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.todo = this.todoServe.getTodo(Number(id));
  }

  getBack() {
    history.back();
  }
}
