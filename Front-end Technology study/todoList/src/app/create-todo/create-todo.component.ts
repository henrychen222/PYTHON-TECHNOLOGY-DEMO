// 课时24
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category as Cat, Todo} from '../interface';

interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  form: FormGroup;

  categories: Category[] = [{id: 0, name: Cat[0]}, {id: 1, name: Cat[1]}, {id: 2, name: Cat[2]}];

  /** 课时26
   * Partial:
   * https://www.tslang.cn/docs/release-notes/typescript-2.1.html
   * https://www.tslang.cn/docs/handbook/advanced-types.html
   * https://www.jianshu.com/p/13a4eb1001f1
   * https://blog.csdn.net/qq_30101131/article/details/83214295
   * */
  @Output()
  create: EventEmitter<Partial<Todo>> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   description: '',
    //   category: '',
    //   content: '',
    // });

    // 课时25
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(15)]],
      category: ['', Validators.required],
      content: '',
    });
  }

  submit() {
    // // 显示表单数据
    // console.log(this.form.value);

    this.create.next({...this.form.value, category: +this.category.value});
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get category(): AbstractControl {
    return this.form.get('category');
  }

}
