import React from "react";
import "./style.css";


function TableHeader(props) {


    return (
            <thead className="thead-dark">
                <tr>
                    <th scope="col" className="align-middle">ID#</th>
                    <th scope="col" className="align-middle">Photo</th>
                    <th scope="col" className="sortable both align-middle">First Name <button data-name="sort-first" onClick={props.handleSortClick}><i className="fas fa-sort"  ></i></button></th>
                    <th scope="col" className="sortable both align-middle">Last Name <button data-name="sort-last" onClick={props.handleSortClick}><i className="fas fa-sort"></i></button></th>
                    <th scope="col" className="align-middle">Email</th>
                    <th scope="col" className="align-middle">Phone</th>
                    <th scope="col" className="align-middle">City</th>
                    <th scope="col" className="align-middle">State <button data-name="sort-location" onClick={props.handleSortClick}><i className="fas fa-sort"></i></button></th>
                </tr>
            </thead>
    )
}

export default TableHeader;
