import { useState } from 'react'

export function TwiterFollowCard({ children, formattedUserName, userName, name, initialIsFollowing }) {
	/*
	useState
	Tiene 2 posiciones la primera para el valor inicial y la segunda para cambiar el estado
		Ejemplo
			const state = useState(false)
			state[0] => El valor actual
			state[1] => La funcion que cambia el estado
		Equivalencia
			const [isFollowinfState, setIsFollowinfState] = useState(false)
	*/
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

	const imgSrc = `https://unavatar.io/${userName}`
	const textisFollowing = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					src={imgSrc}
				/>
				<div className='tw-followCard-info'>
					<strong>{name}</strong>
					<span className='tw-followCard-infoUserName'>
						{formattedUserName(userName)}
						<span className='tw-followCard-certificado'>{children}</span>
					</span>
				</div>
			</header>

			<aside>
				<button
					className={buttonClassName}
					onClick={handleClick}
				>
					{textisFollowing}
				</button>
			</aside>
		</article>
	)
}
