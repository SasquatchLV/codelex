import { Game } from './Game'

describe('Tic-Tac-Toe', () => {
    it('should start with blank state', () => {
        const game = new Game()

        expect(game.getCells()).toEqual([
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
        ])
        expect(game.getTurn()).toBe('X')
        expect(game.getWinner()).toBe('-')
        expect(game.isTie()).toBe(false)
    })

    it('should be able to make a move and next turn is O', () => {
        const game = new Game()

        game.onClick(8)

        expect(game.getCells()).toEqual([
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            'X',
        ])
        expect(game.getTurn()).toBe('O')
        expect(game.getWinner()).toBe('-')
        expect(game.isTie()).toBe(false)
    })

    it('cell cant be replaced', () => {
        const game = new Game()

        game.onClick(8)
        game.onClick(8)

        expect(game.getCells()).toEqual([
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            'X',
        ])
        expect(game.getTurn()).toBe('O')
        expect(game.getWinner()).toBe('-')
        expect(game.isTie()).toBe(false)
    })

    it('check horizontal line is a winner', () => {
        const game = new Game()

        game.onClick(8)
        game.onClick(8)

        expect(game.getCells()).toEqual([
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            '-',
            'X',
        ])
        // expect(game.getTurn()).toBe("O")
        expect(game.getWinner()).toBe('-')
        expect(game.isTie()).toBe(false)
    })
})
