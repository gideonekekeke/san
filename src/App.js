import logo from "./logo.svg";
import "./App.css";

import HeaderView from "./HeaderComp/HeaderView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import Footer from "./Footer/Footer";

function App() {
	return (
		<Router>
			<HeaderView />
			<Routes>
				<Route path='/' element={<HomeScreen />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

// <Footer />
