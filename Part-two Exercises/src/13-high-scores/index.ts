/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
    scores: number[]
    constructor(scores: number[]) {
        this.scores = scores
    }

    get latest() {
        return this.scores[this.scores.length - 1]
    }

    // Get personal best score from the list
    get personalBest() {
        let personalBest = 0
        this.scores.forEach((score) => {
            if (score > personalBest) {
                personalBest = score
            }
        })
        return personalBest
    }

    get personalTopThree() {
        let topThree: number[] = this.scores.sort((a, b) => b - a).slice(0, 3)
        return topThree
    }
}

export { HighScores }
