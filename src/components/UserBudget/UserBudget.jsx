import AddSquare from "src/components/Icons/AddSquare.jsx";
import styles from "./styles.module.scss";

const UserBudget = () => {
	return (
		<div className={styles.userBudget}>
			<div className={styles.budgetText}>
				<span>Your budget</span>
				<span>TMT</span>
			</div>
			<div className={styles.amountContainer}>
				<div className={styles.amount}>0.00</div>
				<AddSquare/>
			</div>
			<div className={styles.monthSpent}>
				<p className={styles.spentText}>In this month spent</p>
				<span className={styles.spentAmount}>12 000</span>
			</div>
		</div>
	);
};

export default UserBudget;
