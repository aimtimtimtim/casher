import AppBar from "src/components/AppBar/AppBar.jsx";
import History from "src/components/History/History.jsx";
import AddSquare from "src/components/Icons/AddSquare.jsx";
import TopLogo from "src/components/Icons/Logo.jsx";
import styles from './styles.module.scss'

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
		
			<History/>
			<AppBar/>
		
		</div>
	);
};

export default MainScreen;
