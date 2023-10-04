import { Card } from "react-bootstrap";
import "./PropertyCard.css";

function CarCard({ property }) {
	return (
		<Card className="custom-card p-2 fade">
			<div className="position-relative">
				<Card.Img
					variant="top"
					src={property.image}
					style={{ borderRadius: "1.3em" }}
				/>

				<div className="btns-on-image">
					<button className="me-auto for-btn">For {property.type}</button>
					<button className="favorite-btn">
						<img
							src="/icons/favorite.svg"
							style={{ color: "red" }}
							alt="Favorite"
						/>
					</button>
				</div>

				{property.isPopular ? (
					<div className="popular">
						<button>Popular</button>
						<div className="curve"></div>
					</div>
				) : null}
			</div>

			<div className="px-3">
				<div className="d-flex mt-4 align-item-center">
					<span
						className="material-icons-outlined me-1"
						style={{ color: "#c9a25b", fontSize: "1.2em" }}
					>
						location_on
					</span>
					<span
						style={{
							lineHeight: 1.2,
							fontWeight: 500,
							color: "rgba(0,0,0,0.8)",
						}}
					>
						{property.street_address}
					</span>
				</div>

				<div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
					<Card.Title
						className="text-uppercase m-0 mb-4 w-75"
						style={{
							fontSize: "1.5em",
							color: "rgba(0,0,0,0.8)",
						}}
					>
						{property.address}
					</Card.Title>
				</div>

				<div className="d-flex flex-wrap justify-content-around">
					<div
						className="d-flex flex-column pe-3"
						style={{ width: "fit-content" }}
					>
						<span
							className="material-icons-outlined mb-2"
							style={{ color: "rgba(0,0,0,0.5)" }}
						>
							apartment
						</span>
						<span
							className="text-capitalize"
							style={{ fontWeight: 500, color: "rgba(0,0,0,0.8)" }}
						>
							{property.storage.rooms} Room
						</span>
					</div>

					<div
						className="d-flex flex-column mb-3 pe-3"
						style={{ width: "fit-content" }}
					>
						<span
							className="material-icons-outlined mb-2"
							style={{ color: "rgba(0,0,0,0.5)" }}
						>
							bed
						</span>
						<span
							className="text-capitalize"
							style={{ fontWeight: 500, color: "rgba(0,0,0,0.8)" }}
						>
							{property.storage.beds} Bed
						</span>
					</div>

					<div
						className="d-flex flex-column mb-3 pe-3"
						style={{ width: "fit-content" }}
					>
						<span
							className="material-icons-outlined mb-2"
							style={{ color: "rgba(0,0,0,0.5)" }}
						>
							bathtub
						</span>
						<span
							className="text-capitalize"
							style={{ fontWeight: 500, color: "rgba(0,0,0,0.8)" }}
						>
							{property.storage.baths} Bath
						</span>
					</div>

					<div
						className="d-flex flex-column align-item-center mb-3 pe-3"
						style={{ width: "fit-content" }}
					>
						<img
							src="/icons/drag_pan.svg"
							className="mb-2"
							width={25}
							alt="Steering"
						/>
						<span
							className="text-capitalize"
							style={{ fontWeight: 500, color: "rgba(0,0,0,0.8)" }}
						>
							{property.storage.floorspace} sft
						</span>
					</div>
				</div>

				<div className="mt-auto d-flex flex-wrap align-items-center justify-content-between mt-2 py-4">
					<div style={{ fontWeight: 500 }}>
						<span
							style={{
								fontSize: "1.3em",
								fontWeight: 500,
								color: "#3531dc",
							}}
						>
							${property.price}
						</span>{" "}
						/month
					</div>

					<button className="btn read-more-btn">Read More</button>
				</div>
			</div>
		</Card>
	);
}

export default CarCard;
