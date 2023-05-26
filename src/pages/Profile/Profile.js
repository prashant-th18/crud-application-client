import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import styles from "./Profile.module.css";
import { useState, useEffect, useCallback } from "react";
import Spiner from "../../components/Spiner/Spiner";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../services/Apis";
import { BASE_URL } from "../../services/helper";

const Profile = () => {
	const [userProfile, setUserProfile] = useState({});
	const [showSpin, setShowSpin] = useState(true);

	const { id } = useParams();

	const userProfileFunction = useCallback(async () => {
		const response = await getSingleUser(id);
		if (response.status === 200) {
			setUserProfile(response.data);
		} else {
			console.log("Error in Profile");
		}
	}, [id]);

	useEffect(() => {
		userProfileFunction();
		setTimeout(() => {
			setShowSpin(false);
		}, 1200);
	}, [userProfileFunction]);

	return (
		<>
			{showSpin ? (
				<Spiner />
			) : (
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
										<img
											src={`${BASE_URL}/uploads/${userProfile.profile}`}
											alt="img"
										/>
									</div>
								</div>
							</Row>
							<div className="text-center">
								<h3>{`${userProfile.fname} ${userProfile.lname}`}</h3>
								<h4>
									<i class={`fa-solid fa-envelope ` + styles["email"]}></i>
									&nbsp;:- <span>{userProfile.email}</span>{" "}
								</h4>
								<h5>
									<i class={`fa-solid fa-mobile`}></i>&nbsp;:-{" "}
									<span>{userProfile.mobile}</span>{" "}
								</h5>
								<h4>
									<i class="fa-solid fa-person"></i>&nbsp;:-{" "}
									<span>{userProfile.gender}</span>{" "}
								</h4>
								<h4>
									<i class="fa-solid fa-location-pin location"></i>&nbsp;:-{" "}
									<span>{userProfile.location}</span>{" "}
								</h4>
								<h4>
									Status&nbsp;:- <span>{userProfile.status}</span>{" "}
								</h4>
								<h5>
									<i
										class={`fa-solid fa-calendar-days ` + styles["calendar"]}
									></i>
									&nbsp;Date Created&nbsp;:-{" "}
									<span>
										{moment(userProfile.dateCreated).format("DD-MM-YYYY")}
									</span>{" "}
								</h5>
								<h5>
									{" "}
									<i
										class={`fa-solid fa-calendar-days ` + styles["calendar"]}
									></i>
									&nbsp;Date Updated&nbsp;:-{" "}
									<span>{userProfile.dateUpdated}</span>{" "}
								</h5>
							</div>
						</Card.Body>
					</Card>
				</div>
			)}
		</>
	);
};

export default Profile;
