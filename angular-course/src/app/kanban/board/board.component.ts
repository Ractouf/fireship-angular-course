import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Board } from '../board.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  @Input() board!: Board;

  constructor(private boardService: BoardService) { }

  taskDrop(event: CdkDragDrop<string[]>) {
    if (this.board.id && this.board.tasks) {
      moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
      this.boardService.updateTasks(this.board.id, this.board.tasks);
    }
  }
}
