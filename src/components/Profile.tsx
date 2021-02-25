import styles from '../styles/components/Profile.module.css';
import {ChallengesContext} from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function Profile(){
	const {level} = useContext(ChallengesContext);

	return(
		<div className ={styles.profileContainer}>
			<img src="https://github.com/carinebatista.png "alt="Carine Batista" />
			<div>
				<strong> Carine Batista </strong>
				<p>
					<img src="icons/level.svg" alt="level"/>
					Level {level}
				</p>
			</div>

		</div>
	);
}