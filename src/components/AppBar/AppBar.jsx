import Account from "src/components/Icons/Account.jsx";
import Expenses from "src/components/Icons/Expenses.jsx";
import Home from "src/components/Icons/Home.jsx";
import styles from "./styles.module.scss";

const appBar = [
	{
		icon: <Home/>,
		title: 'Home'
	},
	{
		icon: <Expenses/>,
		title: 'Expenses'
	},
	{
		icon: <Account/>,
		title: 'Account'
	},
]
const AppBar = () => {
	return (
		
		<ul className={styles.AppBar}>
			{appBar.map((item, i) => (
				<li key={i} className={styles.item}>
					{item.icon}
					<span>
						{item.title}
						</span>
				</li>
			))}
		</ul>
	
	);
};

export default AppBar;
