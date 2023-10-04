import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import properties from "../../JSON/Properties.json";
import { useSelector } from "react-redux";
import PropertyCard from "../../UI/PropertyCard/PropertyCard";
import "./Properties.css";
import { useNavigate } from "react-router-dom";

function Properties() {
	// const { page_no } = useParams();
	const [data, setData] = useState([]);
	const [showedData, setShowedData] = useState([]);
	const [count, setCount] = useState(6);
	const city = useSelector((r) => r.city);
	const navigate = useNavigate();

	function fetchData() {
		setData(
			properties.filter((property) => {
				if (property.city.match(new RegExp(city, "i"))) return property;

				return false;
			})
		);
	}

	useEffect(() => {
		setCount(6);
		fetchData();
	}, [city]); // eslint-disable-line

	useEffect(() => {
		setShowedData(
			data.filter((property, i) => {
				if (i < count) return property;

				return false;
			})
		);
	}, [data, count]);

	const gridCon = {
		display: "grid",
		gridTemplateRows: "repeat(2,1fr)",
		gridTemplateColumns: "repeat(3,1fr)",
		columnGap: "1.8em",
		rowGap: "1.9em",
	};

	return (
		<>
			<div style={gridCon} className="py-5">
				{showedData.map((item, i) => {
					return (
						<div onClick={() => navigate("/property/" + item.id)}>
							<PropertyCard key={i} property={item}></PropertyCard>
						</div>
					);
				})}
			</div>

			{count < data.length ? (
				<button onClick={() => setCount(count + 3)} className="show-more">
					<span className="material-icons-outlined me-2">hourglass_top</span>
					Show More
				</button>
			) : null}
		</>
	);
}

export default Properties;
