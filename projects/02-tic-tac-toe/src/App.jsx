import { useState } from 'react'
import { Square } from './components/Scuare.jsx'
import confetti from 'canvas-confetti'
import './App.css'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Board } from './components/Board.jsx'
import { Turn } from './components/Turn.jsx'

function App() {
	const [turn, setTurn] = useState(TURNS.X)
	const [board, setBoard] = useState(Array(9).fill(null))
	const [winner, setWinner] = useState(null) // null = no hay ganador, false empate

	const updateBoard = index => {
		const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
		const newBoard = [...board]
		if (winner) return
		if (newBoard[index]) return

		newBoard[index] = turn

		setTurn(newTurn)
		setBoard(newBoard)

		const newWinner = checkWinner(newBoard)
		if (newWinner) {
			confetti()
			setWinner(newWinner)
		} else {
			if (checkEndGame(newBoard)) setWinner(false)
		}
	}

	const resetGame = () => {
		setTurn(TURNS.X)
		setBoard(Array(9).fill(null))
		setWinner(null)
	}

	return (
		<main className='board'>
			<h1>Tic Tac Toe</h1>
			<button onClick={resetGame}>Empezar de nuevo</button>
			<section className='game'>
				<Board
					board={[...board]}
					updateBoard={updateBoard}
				/>
			</section>
			<Turn />
			<WinnerModal
				winner={winner}
				resetGame={resetGame}
			/>
		</main>
	)
}

export default App
