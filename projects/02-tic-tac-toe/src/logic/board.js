import { WINNER_COMBOS } from '../constants'

export const checkWinner = board => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo
		if (board[a] && board[a] == board[b] && board[a] == board[c]) {
			return board[a]
		}
	}
	return null
}
export const checkEndGame = board => {
	return board.every(square => square !== null)
}

export const saveGameStorage = ({ board, turn }) => {
	window.localStorage.setItem('board', JSON.stringify(board))
	window.localStorage.setItem('turn', turn)
}
export const resetGameStorage = () => {
	window.localStorage.removeItem('board')
	window.localStorage.removeItem('turn')
}
