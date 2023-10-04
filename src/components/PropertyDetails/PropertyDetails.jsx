import { useEffect, useState } from "react";
import properties from "../../JSON/Properties.json";
import { useParams } from "react-router-dom";
import PropertyCard from "../../UI/PropertyCard/PropertyCard";

function PropertyDetails() {
	const [data, setData] = useState({ storage: {} });
	const { id } = useParams();

	useEffect(() => {
		setData(
			properties.filter((property) => {
				if (property.id === Number(id)) return property;

				return false;
			})[0]
		);
	}, []); // eslint-disable-line
	return (
		<div style={{ width: "35em", margin: "0 auto" }}>
			<h3>{data.city}</h3>
			<PropertyCard property={data}></PropertyCard>
		</div>
	);
}

export default PropertyDetails;
