import AddSquare from "src/components/Icons/AddSquare.jsx";
import Expenses from "src/components/Icons/Expenses.jsx";
import Home from "src/components/Icons/Home.jsx";
import TopLogo from "src/components/Icons/Logo.jsx";
import Account from "src/components/Icons/Profile.jsx";
import styles from 'src/pages/MainScreen/styles.module.scss'

const MainScreen = () => {
	return (
		<div className={styles.mainScreen}>
			<div className={styles.topLogo}>
				<TopLogo/>
				<span className={styles.logoText}>Casher</span>
			</div>
			
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
			
			<div className={styles.appBar}>
				<div className={styles.item}><Home/><span>Home</span></div>
				<div className={styles.item}><Expenses/><span>Expenses</span></div>
				<div className={styles.item}><Account/><span>Account</span></div>
			</div>
		
		</div>
	);
};

export default MainScreen;
