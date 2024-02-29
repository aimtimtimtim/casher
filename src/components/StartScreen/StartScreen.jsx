import styles from './styles.module.css'

const StartScreen = () => {
	return (
		<div className={styles.start}>
			<div className={styles.container}>
				<div className={styles.currencies}>
					<span>¥</span>
					<span>€</span>
				</div>
				<h1 className={styles.logo}>Casher</h1>
				<span className={styles.soon}>coming soon</span>
				<div className={styles.currencies}>
					<span>₺</span>
					<span>$</span>
				</div>
			</div>
		
		</div>
	);
};

export default StartScreen;
