import Expenses from "src/components/Icons/Expenses.jsx";
import Home from "src/components/Icons/Home.jsx";
import Account from "src/components/Icons/Profile.jsx";
import styles from "./styles.module.scss";

const AppBar = () => {
	return (
		<div className={styles.appBar}>
			<div className={styles.item}><Home/><span>Home</span></div>
			<div className={styles.item}><Expenses/><span>Expenses</span></div>
			<div className={styles.item}><Account/><span>Account</span></div>
		</div>
	);
};

export default AppBar;
