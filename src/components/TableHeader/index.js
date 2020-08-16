import React from "react";
import "./style.css";


function TableHeader(props) {


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
                    <th scope="col" className="align-middle">ID#</th>
                    <th scope="col" className="align-middle">Photo</th>
                    <th scope="col" className="sortable both align-middle">First Name <span><i className="fas fa-sort" data-name="sort-first" onClick={props.handleBtnClick}></i></span></th>
                    <th scope="col" className="sortable both align-middle">Last Name <span><i className="fas fa-sort" data-name="sort-last"></i></span></th>
                    <th scope="col" className="align-middle">Email</th>
                    <th scope="col" className="align-middle">Phone</th>
                    <th scope="col" className="align-middle">City</th>
                    <th scope="col" className="align-middle">State <span><i className="fas fa-sort" data-name="sort-state"></i></span></th>
                </tr>
            </thead>
    )
}

export default TableHeader;