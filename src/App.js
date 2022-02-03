import logo from "./logo.svg";
import "./App.css";

import HeaderView from "./HeaderComp/HeaderView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import Footer from "./Footer/Footer";
import ContactPage from "./ContactPage/ContactPage";
import Allabout from "./About/Allabout";
import ShopPage from "./ShopPage/ShopPage";

function App() {
	return (
		<Router>
			<HeaderView />
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/about' element={<Allabout />} />
				<Route path='/shop' element={<ShopPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

// <Footer />
