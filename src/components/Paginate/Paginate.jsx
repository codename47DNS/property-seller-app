import { Stack, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Paginate.css";
import { useEffect, useState } from "react";

function Paginate({ car }) {
	const [totalCars,setTotalCars] = useState(0);
	const pages = [1,2,3,4,5,6,7,8,9,10];

	useEffect(() => {
		setTotalCars(car.length);
		// eslint-disable-next-line
	},[]);

	return (
		<>
			<Stack
				gap={3}
				direction="horizontal"
				className="align-items-center justify-content-between py-3 px-4 custom-shadow"
				style={{
					borderRadius: "1em",
				}}
			>
				<div>
					{ 6 } from { totalCars }
				</div>

				<Pagination className="m-0" style={{ border : "1px solid #fff" }}>
					{
						pages.map((item) => {
							return <Link key={item} to={"/page/"+item}>{item}</Link>
						})
					}
				</Pagination>
			</Stack>
		</>
	);
}

export default Paginate;
