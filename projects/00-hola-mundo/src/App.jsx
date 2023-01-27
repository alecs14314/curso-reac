import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

export function App() {
	const formatUserName = userName => `@${userName}`
	const users = [
		{ formattedUserName: formatUserName, userName: 'midudev', name: 'Francisco Cercado', isFollowing: false },
		{ formattedUserName: formatUserName, userName: 'pheralb', name: 'Juan Alvarez Melendez', isFollowing: false },
		{ formattedUserName: formatUserName, userName: 'elonmusk', name: 'Elon Musk', isFollowing: true },
		{ formattedUserName: formatUserName, userName: 'vxnder', name: 'Dark Vader', isFollowing: true },
		{ formattedUserName: formatUserName, userName: 'TMChein', name: 'Tomas', isFollowing: true },
	]
	return (
		<section className='App'>
			{users.map(({ formattedUserName, userName, name, isFollowing }, index) => {
				return (
					<TwiterFollowCard
						key={userName}
						userName={userName}
						name={name}
						initialIsFollowing={isFollowing}
						formattedUserName={formattedUserName}
					>
						Cerificado
					</TwiterFollowCard>
				)
			})}
		</section>
	)
}
