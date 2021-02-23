import styles from '../styles/components/Profile.module.css';

export function Profile(){
	return(
		<div className ={styles.profileContainer}>
			<img src="https://github.com/carinebatista.png "alt="Carine Batista" />
			<div>
				<strong> Carine Batista </strong>
				<p>Level 1</p>
			</div>

		</div>
	);
}