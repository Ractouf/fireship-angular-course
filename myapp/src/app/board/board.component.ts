import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  template: `
  <h1>Current player: {{ player }}</h1>
  
  <button (click) = "newGame()">Start new game</button>
  
  <h2 *ngIf = "winner">Player {{ winner }} won the game!</h2>
  
  <main>
    <app-square
      *ngFor = "let val of squares; let i = index"
      [value] = "val"
      (click) = "makeMove(i)">
    </app-square>
  </main>
  `,
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent {
  squares: any[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string = "";

  constructor() { }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
