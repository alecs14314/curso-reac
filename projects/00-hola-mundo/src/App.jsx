import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'
export function App() {
	const formatUserName = userName => `@${userName}`
	return (
		<section className='App'>
			<TwiterFollowCard
				formattedUserName={formatUserName}
				userName='midudev'
				name='Francisco Cercado Franco'
				initialIsFollowing={false}
			>
				Certificado
			</TwiterFollowCard>
			<TwiterFollowCard
				formattedUserName={formatUserName}
				userName='pheralb'
				name='Juan Alvarez Melendez'
				initialIsFollowing={false}
			>
				Certificado
			</TwiterFollowCard>
			<TwiterFollowCard
				formattedUserName={formatUserName}
				userName='elonmusk'
				name='Elon Musk'
				initialIsFollowing={true}
			>
				Certificado
			</TwiterFollowCard>
			<TwiterFollowCard
				formattedUserName={formatUserName}
				userName='vxnder'
				name='Dark Vader'
				initialIsFollowing={true}
			>
				Certificado
			</TwiterFollowCard>
		</section>
	)
}
