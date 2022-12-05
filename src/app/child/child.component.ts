import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data!: any;
  @Output() cycleData = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.cycleData.emit(this.data);
  }
}
