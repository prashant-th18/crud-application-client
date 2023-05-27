import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { BASE_URL } from "../../services/helper";
import styles from "./Table.module.css";
import { NavLink } from "react-router-dom";
import { updateStatus } from "../../services/Apis";
import { ToastContainer, toast } from "react-toastify";
import Paginations from "../Paginations/Paginations";

const Tables = (props) => {
	const statusHandler = async (id, status) => {
		const response = await updateStatus(id, status);
		console.log("In Tables", response);
		if (response.status === 200) {
			await props.getUsersData();

			toast.success("Status Updated");
		} else {
			toast.error("Something Went Wrong!");
		}
	};
	return (
		<>
			<div className={`container`}>
				<Row>
					<div className={`col mt-0`}>
						<Card className={`shadow`}>
							<Table className={`align-items-center`}>
								<thead className="thead-dark">
									<tr className={`table-dark`}>
										<th>ID</th>
										<th>Full Name</th>
										<th>Email</th>
										<th>Gender</th>
										<th>Status</th>
										<th>Profile</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{props.usersData.length > 0 ? (
										props.usersData.map((element, index) => {
											return (
												<>
													<tr>
														<td>{index + 1 + (props.page - 1) * 6}</td>
														<td>{element.fname + " " + element.lname}</td>
														<td>{element.email}</td>
														<td>{element.gender === "Male" ? "M" : "F"}</td>
														<td className={`d-flex align-items-center`}>
															<Dropdown className={`text-center`}>
																<Dropdown.Toggle
																	className={styles["dropdown_btn"]}
																	id="dropdown-basic"
																>
																	<Badge
																		bg={
																			element.status === "Active"
																				? "primary"
																				: "danger"
																		}
																	>
																		{element.status}&nbsp;
																		<i className="fa-solid fa-angle-down"></i>
																	</Badge>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item
																		onClick={() =>
																			statusHandler(element._id, "Active")
																		}
																	>
																		Active
																	</Dropdown.Item>
																	<Dropdown.Item
																		onClick={() =>
																			statusHandler(element._id, "InActive")
																		}
																	>
																		InActive
																	</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</td>
														<td className={styles["img_parent"]}>
															<img
																src={`${BASE_URL}/uploads/${element.profile}`}
																alt="img"
															/>
														</td>
														<td>
															<Dropdown>
																<Dropdown.Toggle
																	variant="light"
																	className={
																		styles["action"] +
																		` ` +
																		styles["dropdown-toggle"]
																	}
																	id="dropdown-basic"
																>
																	<i class="fa-solid fa-ellipsis-vertical"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu>
																	<Dropdown.Item>
																		<NavLink
																			to={`/userprofile/${element._id}`}
																			className={`text-decoration-none`}
																		>
																			<i
																				className="fa-solid fa-eye"
																				style={{ color: "green" }}
																			></i>
																			&nbsp;
																			<span>View</span>
																		</NavLink>
																	</Dropdown.Item>
																	<Dropdown.Item>
																		<NavLink
																			to={`/edit/${element._id}`}
																			className={`text-decoration-none`}
																		>
																			<i
																				className="fa-solid fa-pen-to-square"
																				style={{ color: "blue" }}
																			></i>
																			&nbsp;
																			<span>Edit</span>
																		</NavLink>
																	</Dropdown.Item>
																	<Dropdown.Item
																		onClick={() => {
																			props.deleteUser(element._id);
																		}}
																	>
																		<i
																			className="fa-solid fa-trash"
																			style={{ color: "red" }}
																		></i>
																		&nbsp;
																		<span>Delete</span>
																	</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</td>
													</tr>
												</>
											);
										})
									) : (
										<div className={`no_data text_center`}>No Data</div>
									)}
								</tbody>
							</Table>
							<Paginations
								prevButtonHandler={props.prevButtonHandler}
								nextButtonHandler={props.nextButtonHandler}
								page={props.page}
								pageCount={props.pageCount}
								setPage={props.setPage}
							/>
						</Card>
					</div>
				</Row>
				<ToastContainer />
			</div>
		</>
	);
};

export default Tables;
