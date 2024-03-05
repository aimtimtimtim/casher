import Add from "src/components/Icons/Add.jsx";
import Edit from "src/components/Icons/Edit.jsx";
import styles from "./styles.module.scss";

const UserBudget = () => {
	return (
		<div className={styles.userBudget}>
			<div className={styles.budgetText}>
				<span>Your Budget</span>
				<div className={styles.currency}>
					<Edit/>
					TMT
				</div>
			</div>
			<div className={styles.amount}>
				0.00
				<Add/>
			</div>
			<div className={styles.monthSpent}>
				<span>In this month spent</span>
				<span className={styles.spentAmount}>12 000</span>
			</div>
		</div>
	);
};

export default UserBudget;
