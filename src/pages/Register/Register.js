import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { registerFunction } from "../../services/Apis";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";
import Spiner from "../../components/Spiner/Spiner";
import { addData } from "../../components/Context/ContextProvider";

const Register = () => {
	const [inputData, setInputData] = useState({
		fname: "",
		lname: "",
		email: "",
		mobile: "",
		gender: "",
		location: "",
	});

	const [status, setStatus] = useState(null);
	const [image, setImage] = useState("");
	const [preview, setPreview] = useState("");

	const navigate = useNavigate();

	// Spinner will be shown while we fetch the data
	const [showSpin, setShowSpin] = useState(true);

	// Input Handler Function
	const inputHandler = (e) => {
		const { name, value } = e.target;
		setInputData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	// Status Handler Function
	const statusHandler = (e) => {
		// console.log(e);
		setStatus(e.value);
	};

	// Image Handler Function
	const imageHandler = (e) => {
		setImage(e.target.files[0]);
	};

	// Using 'useEffect' to show image on the preview once uploaded
	useEffect(() => {
		if (image) {
			setPreview(URL.createObjectURL(image));
		}
		setTimeout(() => {
			setShowSpin(false);
		}, 1200);
	}, [image]);

	const { userAdd, setUserAdd } = useContext(addData);

	// Submit Handler Function
	const submitHandler = async (e) => {
		e.preventDefault();

		const { fname, lname, email, mobile, gender, location } = inputData;
		if (fname === "") {
			toast.error("First Name is required");
		} else if (lname === "") {
			toast.error("Last Name is required");
		} else if (email === "") {
			toast.error("Email is required");
		} else if (!email.includes("@")) {
			toast.error("Invalid Email");
		} else if (mobile === "") {
			toast.error("Mobile Number is required");
		} else if (mobile.length !== 10) {
			toast.error("Invalid Mobile Number");
		} else if (gender === "") {
			toast.error("Gender is required");
		} else if (status === "") {
			toast.error("Status is required");
		} else if (image === "") {
			toast.error("Image is required");
		} else if (location === "") {
			toast.error("Location is required");
		} else {
			const data = new FormData();
			data.append("fname", fname);
			data.append("lname", lname);
			data.append("email", email);
			data.append("mobile", mobile);
			data.append("gender", gender);
			data.append("status", status);

			data.append("user_profile", image);
			data.append("location", location);

			const config = {
				"Content-Type": "multipart/form-data",
			};

			const response = await registerFunction(data, config);
			if (response.status === 200) {
				setInputData({
					...inputData,
					fname: "",
					lname: "",
					email: "",
					mobile: "",
					gender: "",
					location: "",
				});
				setImage("");
				setStatus("");
				setUserAdd(response.data);
				navigate("/");
			} else {
				toast.error("Error!");
			}
		}
	};

	// Options for the select menu
	const options = [
		{ value: "Active", label: "Active" },
		{ value: "InActive", label: "InActive" },
	];

	return (
		<>
			{showSpin ? (
				<Spiner />
			) : (
				!showSpin && (
					<div className="container">
						<h2 className="text-center mt-2">Register Your Details</h2>
						<Card className="shadow mt-3 p-3">
							<div className={`text-center mb-3 ` + styles["profile_div"]}>
								<img src={preview ? preview : `/man.png`} alt="img"></img>
							</div>
							<Form>
								<Row>
									{/* col-lg-6 will make our column occupy half the width of the entire row */}
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter First Name"
											name="fname"
											onChange={inputHandler}
											value={inputData.fname}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Last Name"
											name="lname"
											onChange={inputHandler}
											value={inputData.lname}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											name="email"
											onChange={inputHandler}
											value={inputData.email}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Mobile No.</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Mobile Number"
											name="mobile"
											onChange={inputHandler}
											value={inputData.mobile}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Select Gender</Form.Label>
										<Form.Check
											type="radio"
											label="Male"
											name="gender"
											value="Male"
											onChange={inputHandler}
										/>
										<Form.Check
											type="radio"
											label="Female"
											name="gender"
											value="Female"
											onChange={inputHandler}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Select Status</Form.Label>
										<Select
											options={options}
											onChange={statusHandler}
											// defaultValue={options[0]}
											// value={status}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Select Your Profile Image</Form.Label>
										<Form.Control
											type="file"
											placeholder="Upload Your File"
											name="user_profile"
											onChange={imageHandler}
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 col-lg-6"
										controlId="formBasicEmail"
									>
										<Form.Label>Enter Your Location</Form.Label>
										<Form.Control
											type="location"
											placeholder="Enter Location"
											name="location"
											onChange={inputHandler}
											value={inputData.location}
										/>
									</Form.Group>
									<Button
										variant="primary"
										type="submit"
										onClick={submitHandler}
									>
										Submit
									</Button>
								</Row>
							</Form>
						</Card>
						<ToastContainer position="top-center" />
					</div>
				)
			)}
		</>
	);
};

export default Register;
