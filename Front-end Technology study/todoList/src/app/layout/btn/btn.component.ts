/**
 * 课时23
 * changeDetection:
 * https://www.jianshu.com/p/19261cc07a63
 * https://segmentfault.com/a/1190000010928087
 * */
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnComponent implements OnInit {
  @Input()
  text: string;

  // 课时25
  @Input()
  disabled = false;

  @Output()
  click$: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
