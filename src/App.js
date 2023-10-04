// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";

// Components
import Home from "./components/Home/Home";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
	const cityReducer = (state,action) => {
		if(action.type === "SET_CITY_NAME")
		return {city : action.payload.city_name };

		return {
			city : "New York"
		}
	}

	const store = createStore(cityReducer,null);


	return (
		<div className="p-3">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="property/:id" element={<PropertyDetails />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
