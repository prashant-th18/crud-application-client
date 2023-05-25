import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Home.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Tables from "../../components/Tables/Tables";
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	// addUser Click Handler
	const addUser = () => {
		navigate("/register");
	};

	// Spinner will be shown while we fetch the data
	const [showSpin, setShowSpin] = useState(true);

	// Temporary
	useEffect(() => {
		setTimeout(() => {
			setShowSpin(false);
		}, 1200);
	}, []);

	return (
		<>
			<div className="container">
				<div className="main_div">
					{/* Search - Add buttons */}
					<div
						className={
							`mt-4 d-flex justify-content-between ` + styles["search_add"]
						}
					>
						<div className={`col-lg-4 ` + styles["search"]}>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="success" className={styles["search_btn"]}>
									Search
								</Button>
							</Form>
						</div>
						<div className={styles["add_btn"]}>
							<Button
								variant="primary"
								onClick={addUser}
								className={styles["add_btn"]}
							>
								<i className="fa-solid fa-plus"></i>&nbsp; Add User
							</Button>
						</div>
					</div>
					{/* Export, Gender, Status */}
					<div
						className={
							styles["filter_div"] +
							" mt-5 d-flex justify-content-between flex-wrap"
						}
					>
						<div className={styles["export_csv"]}>
							<Button className={styles["export_btn"]}>Export To CSV</Button>
						</div>
						<div className={styles["filter_gender"]}>
							<div className={styles["filter"]}>
								<h3>Filter By Gender</h3>
								<div
									className={
										`d-flex justify-content-between ` + styles["gender"]
									}
								>
									<Form.Check
										type="radio"
										label="All"
										name="status"
										value="All"
										defaultChecked
									/>
									<Form.Check
										type="radio"
										label="Male"
										name="status"
										value="Male"
									/>
									<Form.Check
										type="radio"
										label="Female"
										name="status"
										value="Female"
									/>
								</div>
							</div>
						</div>
						<div className={`filter_newold`}>
							<h3>Sort By Date</h3>
							<Dropdown className={`text-center`}>
								<Dropdown.Toggle
									className={styles["dropdown_btn"]}
									id="dropdown-basic"
								>
									<i class="fa-solid fa-sort"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item>Old Data</Dropdown.Item>
									<Dropdown.Item>New Data</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className={`filter_status`}>
							<div className={`status`}>
								<h3>Filter By Status</h3>
								<div
									className={`d-flex justify-content-between status_radio flex-wrap`}
								>
									<Form.Check
										type="radio"
										label="All"
										name="gender"
										value="All"
										defaultChecked
									/>
									<Form.Check
										type="radio"
										label="Active"
										name="gender"
										value="Active"
									/>
									<Form.Check
										type="radio"
										label="InActive"
										name="gender"
										value="InActive"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{showSpin && <Spiner />}
				{!showSpin && <Tables />}
			</div>
		</>
	);
};

export default Home;