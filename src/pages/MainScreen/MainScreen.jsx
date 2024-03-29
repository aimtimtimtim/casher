import AppBar from "src/components/AppBar/AppBar.jsx";
import History from "src/components/History/History.jsx";
import Add from "src/components/Icons/Add.jsx";
import Edit from "src/components/Icons/Edit.jsx";
import NewExprense from "src/components/Icons/NewExprense.jsx";
import Logo from "src/components/Logo/Logo.jsx";
import UserBudget from "src/components/UserBudget/UserBudget.jsx";
import styles from './styles.module.scss'

const MainScreen = () => {
	return (
		<div className={styles.mainScreen}>
			<div className={styles.logoTop}>
				<Logo/>
				<span>Casher</span>
			</div>
			
			<UserBudget/>
			<History/>
			<div className={styles.newExpense}><NewExprense/></div>
		<AppBar/>
		</div>
	);
};

export default MainScreen;
