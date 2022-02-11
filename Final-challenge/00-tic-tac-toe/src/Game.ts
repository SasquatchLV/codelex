export type XO = 'X' | 'O' | '-'

export class Game {
    cells: XO[] = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    turn: XO = 'X'
    getCells(): XO[] {
        return this.cells
    }

    getTurn(): XO {
        const countO = this.cells.filter(cell => cell === 'O').length
        const countX = this.cells.filter(cell => cell === 'X').length
        return countX === countO ? 'X' : 'O'
    }

    getWinner(): XO {
        return '-'
    }

    isTie(): boolean {
        return false
    }

    onClick(i: number): void {
        if (this.cells[i] === '-') {
            this.cells[i] = this.getTurn()
        }
    }

    restart(): void {
        console.log('restart called')
    }
}
