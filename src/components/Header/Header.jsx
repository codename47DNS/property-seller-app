import { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";

function Header() {
	const cityNames = ["New York", "Mumbai", "Paris", "London"];
	const dispatch = useDispatch();
	const [activeBtn, setActiveBtn] = useState(0);

	function filterByCity(i,city)
	{
		dispatch({
			type : "SET_CITY_NAME",
			payload : {
				city_name : city
			}
		});
		setActiveBtn(i);
	}

	useEffect(() => {
		filterByCity(0,cityNames[0]);
		// eslint-disable-next-line
	},[]);

	return (
		<>
			<div className="text-center mb-5">
				<h1 className="featured-heading">Featured Listed Property</h1>
				<p>
					Real estate can be bought, sold, leased, or rented, and can be a<br />{" "}
					valuable investment opportunity. The value of real estate can be...
				</p>
			</div>

			<div className="d-flex align-items-center px-2">
				<div className="d-flex me-auto">
					{cityNames.map((city, i) => {
						return (
							<button
								key={i}
								className={"city-btn" + (activeBtn === i ? " active" : "")}
								onClick={() => filterByCity(i,city)}
							>
								{city}
							</button>
						);
					})}
				</div>

				<button className="btn-view-all d-flex align-item-center">
					<span style={{ lineHeight: 1.65 }}>View All</span>
					<span className="material-icons-outlined ms-1">arrow_right_alt</span>
				</button>
			</div>
		</>
	);
}

export default Header;
