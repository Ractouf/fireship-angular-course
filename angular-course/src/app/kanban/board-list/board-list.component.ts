import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.scss'
})

export class BoardListComponent implements OnInit {
  boards: Board[] = [];
  sub: Subscription = new Subscription();

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.sub = this.boardService
      .getUserBoards()
      .subscribe(boards => (this.boards = boards));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }
}
