import { Component, OnInit, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from '@angular/cdk/drag-drop';
// For verify drop data
import {
  CdkDragEnter,
  CdkDragExit,
  CdkDragStart,
  CdkDrag,
  CdkDropList
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() {}

  @Input() condition: boolean;


  // Do a DOM bind to
  availNode = ['Master Node', 'Proxy node', 'Management Node', 'Worker Node', 'Storage Node'];

  // So that the node data does not duplicate
  // Use this array to make sure
  masterNode = [];
  proxyNode = [];
  mgmtNode = [];
  workerNode = [];
  storageNode = [];

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );

      // Use copy to adjust the value as copy
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // to verify the drop
  verifyDrop(drag?: CdkDrag, drop?: CdkDropList) {
    return drop.data.indexOf(drag.data) === -1;
  }
}
