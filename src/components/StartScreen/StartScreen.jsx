import styles from 'src/components/StartScreen/styles.module.scss'
import mainLogo from '/public/mainLogo.svg'
const StartScreen = () => {
	return (
		<div className={styles.start}>
			<div className={styles.container}>
				<div className={styles.currencies}>
					<span>¥</span>
					<span>€</span>
				</div>
				<img src={mainLogo} alt={'logo'}/>
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
