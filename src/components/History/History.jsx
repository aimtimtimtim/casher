import Add from "src/components/Icons/Add.jsx";
import Edit from "src/components/Icons/Edit.jsx";
import styles from "./styles.module.scss";

const History = () => {
	return (
		<div className={styles.history}>
			<span className={styles.historyTitle}>History</span>
			<div className={styles.historyCards}>
				<div className={styles.historyCard}>
					<div className={styles.details}>
						<span className={styles.title}>News</span>
						<span className={styles.date}>12.03.24</span>
					</div>
					<span className={styles.amount}>
					245 TMT
				</span>
				</div>
				<div className={styles.historyCard}>
					<div className={styles.details}>
						<span className={styles.title}>News</span>
						<span className={styles.date}>12.03.24</span>
					</div>
					<span className={styles.amount}>
					245 TMT
				</span>
				</div>
			
			</div>
		</div>
	);
};

export default History;
