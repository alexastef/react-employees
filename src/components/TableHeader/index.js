import React from "react";
import "./style.css";


function TableHeader() {


    // function handleClick(event){
    //     event.preventDefault();
    //     console.log(event.target.dataset.name);
    //     if (event.target.dataset.name === "sort-up") {

    //     } else if (event.target.dataset.name === "sort-down") {

    //     }
    // }
    return (
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ID#</th>
                    <th scope="col">Photo</th>
                    <th scope="col" className="sortable both">First Name <span><i className="fas fa-sort-up" data-name="sort"></i></span></th>
                    <th scope="col" className="sortable both">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                </tr>
            </thead>
    )
}

export default TableHeader;