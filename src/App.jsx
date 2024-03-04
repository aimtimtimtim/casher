import {useEffect, useState} from "react";
import StartScreen from "src/components/StartScreen/StartScreen.jsx";
import MainScreen from "src/pages/MainScreen/MainScreen.jsx";
import 'src/App.scss'

function App() {
	const [showStartScreen, setShowStartScreen] = useState(true);
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowStartScreen(false);
		}, 1000);
		console.log(timeoutId)
		
		return () => clearTimeout(timeoutId);
	}, [])
	return (
		<div>
			{showStartScreen && <StartScreen/>}
			<MainScreen/>
		</div>
	)
}

export default App
