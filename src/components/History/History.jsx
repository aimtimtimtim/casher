
import styles from "./styles.module.scss";

const History = () => {
	return (
		<div className={styles.history}>
			<span className={styles.historyText}>History</span>
			<div className={styles.historyContainer}>
				<div className={styles.historyCard}>
					<div className={styles.details}>
						<span className={styles.title}>MacBook</span>
						<span className={styles.date}>12.01.24</span>
					</div>
					<span className={styles.cost}>23 000 TMT</span>
				</div>
			</div>
		</div>
	);
};

export default History;
