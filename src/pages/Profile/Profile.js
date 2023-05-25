import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import styles from "./Profile.module.css";

const Profile = () => {
	return (
		<>
			<div className="container">
				<Card className="card-profile shadow col-lg-6 mx-auto mt-5">
					<Card.Body>
						<Row>
							<div className="col">
								<div
									className={
										styles["card-profile-stats"] +
										` d-flex justify-content-center`
									}
								>
									<img src="/man.png" alt="man" />
								</div>
							</div>
						</Row>
						<div className="text-center">
							<h3>{`Prashant Thakur`}</h3>
							<h4>
								<i class={`fa-solid fa-envelope ` + styles["email"]}></i>
								&nbsp;:- <span>{`abc@gmail.com`}</span>{" "}
							</h4>
							<h5>
								<i class={`fa-solid fa-mobile`}></i>&nbsp;:-{" "}
								<span>{`1234567890`}</span>{" "}
							</h5>
							<h4>
								<i class="fa-solid fa-person"></i>&nbsp;:- <span>{`Male`}</span>{" "}
							</h4>
							<h4>
								<i class="fa-solid fa-location-pin location"></i>&nbsp;:-{" "}
								<span>{`Nahan`}</span>{" "}
							</h4>
							<h4>
								Status&nbsp;:- <span>{`Active`}</span>{" "}
							</h4>
							<h5>
								<i
									class={`fa-solid fa-calendar-days ` + styles["calendar"]}
								></i>
								&nbsp;Date Created&nbsp;:- <span>{`01-01-2000`}</span>{" "}
							</h5>
							<h5>
								{" "}
								<i
									class={`fa-solid fa-calendar-days ` + styles["calendar"]}
								></i>
								&nbsp;Date Updated&nbsp;:- <span>{`01-01-2000`}</span>{" "}
							</h5>
						</div>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default Profile;
