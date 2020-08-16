import React from "react";
import "./style.css";


function TableHeader(props) {


    return (
            <thead className="thead-dark">
                <tr>
                    <th scope="col" className="align-middle">ID#</th>
                    <th scope="col" className="align-middle">Photo</th>
                    <th scope="col" className="sortable both align-middle">First Name <button><i className="fas fa-sort" data-name="sort-first" onClick={props.handleSortClick}></i></button></th>
                    <th scope="col" className="sortable both align-middle">Last Name <button><i className="fas fa-sort" data-name="sort-last"></i></button></th>
                    <th scope="col" className="align-middle">Email</th>
                    <th scope="col" className="align-middle">Phone</th>
                    <th scope="col" className="align-middle">City</th>
                    <th scope="col" className="align-middle">State <button><i className="fas fa-sort" data-name="sort-state"></i></button></th>
                </tr>
            </thead>
    )
}

export default TableHeader;