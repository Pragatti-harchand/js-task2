import React, { useEffect, useState } from "react";
import axios from "axios";
import { paginate, searchArrayOfObjects, sorting } from "../utils/Utils";



function Apidata() {
	const [allUsers, setAllUsers] = useState(null);
	const [persons, setPersons] = useState(null);
	const [pageSize, setPageSize] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState("id");
	const [sortOrder, setSortOrder] = useState(true);

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/photos ").then(
			(response) => {
				setPersons(response.data);
				setAllUsers(response.data);
			},
		);
	}, []);

	const handlePageChange = (i) => {
		setCurrentPage(i);
	};
	const handlePageSizeChange = (e) => {
		setCurrentPage(0);
		setPageSize(Number(e.target.value));
	};
	const handleSort = (column) => {
		setSortBy(column);
		setSortOrder(!sortOrder);
	};

	const handleSearch = (e) => {
		setCurrentPage(0);
		let searchResults = searchArrayOfObjects(allUsers, e.target.value);
		setPersons(searchResults);
	};

	let linksArray = [];
	let totalLinks = persons && Math.ceil(persons.length / pageSize);
	for (let i = 0; i < totalLinks; i++) {
		linksArray.push(i);
	}

	let paginatedUsers = persons && sorting(persons, sortBy, sortOrder);
	  paginatedUsers = persons && paginate(persons, currentPage, pageSize);

	return (
		<div>
			<input type="text" onKeyUp={handleSearch}  placeholder="search the items"/>
			<table className="table ">
				<thead>
					<th onClick={() => handleSort("albumId")}>AlbumID</th>
					<th onClick={() => handleSort("id")}>Id</th>
					
					<th onClick={() => handleSort("title")}>Title</th>
					<th onClick={() => handleSort("url")}>Image</th>
					<th onClick={() => handleSort("thumbnail")}>thumbnail</th>
				</thead>
				<tbody>
					{paginatedUsers ? (
						paginatedUsers.map((person) => (
							<tr key={person.id}>
								<td>{person.albumId}</td>
								<td>{person.id}</td>
								<td>{person.title}</td>
								<td>
									<img
										className="rounded-circle"
										style={{ width: "50px" }}
										src={person.url}
										alt=""
									/>
								</td>
								<td><img
										className="rounded-circle"
										style={{ width: "50px" }}
										src={person.thumbnailUrl}
										alt=""
									/></td>
								
							</tr>
						))
					) : (
						<h3>Loading...</h3>
					)}
				</tbody>
			</table>
			<div className="d-flex flexCenter" style={{width: '100%', overflowX:'scroll'}}>
				<ul className="pagination">
					<li onClick={()=>{setCurrentPage(currentPage + 1)}} className="page-item page-link">Next</li>
					{linksArray &&
						linksArray.map((link) => (
							<li
								onClick={() => handlePageChange(link)}
								className={`page-item page-link ${link ===currentPage ? 'active' : ''}`}>
								{link + 1}
							</li>
						))}
					<li onClick={()=>{setCurrentPage(currentPage - 1)}} className="page-item page-link">Prev</li>
					
				</ul>
				<select name="" id="" onChange={handlePageSizeChange}>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={30}>30</option>
					<option value={40}>40</option>
					<option value={50}>50</option>
				</select>
			</div>
		</div>
	);
}

export default Apidata;



