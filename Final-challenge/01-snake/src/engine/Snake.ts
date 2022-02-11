import { Cell } from './Cell'
import { Direction } from './Direction'

export class Snake {
    head: Cell = new Cell(2, 0)
    tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
    direction: Direction = 'Right'

    setDirection(newDirection: Direction) {
        this.direction = newDirection
    }

    move() {
        if (this.direction === 'Right') {
            this.head.x = this.head.x + 1
            this.tail.forEach(cell => (cell.x = cell.x + 1))
        }
        if (this.direction === 'Down') {
            this.head.y = this.head.y + 1
            this.tail.forEach(cell => (cell.y = cell.y + 1))
        }
    }

    grow() {}

    getHead(): Cell {
        return this.head
    }

    getDirection(): Direction {
        return this.direction
    }

    getTail(): Cell[] {
        return this.tail
    }

    isTakenBySnake(cell: Cell): boolean {
        return false
    }
}
