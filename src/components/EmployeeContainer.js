import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

function EmployeeContainer() {
    // this includes/returns the searchbar and the table, the table header and rows 
    // are injected into the table

    // api call needs to be in here
    // props are to be passed from the initial data response down through the children
    // rows is the first component that will use the props
    // props need to be passed from the data --> through the table --> to the row


    // Set initial search state to empty
    // const [searchState, setSearch] = useState("");
    const [employees, setEmployees] = useState([]);

    // When the page loads, get all the employees
    useEffect(() => {
        getAllEmployees();
    }, [])

    // get all the employees and set that state to the returned data
    function getAllEmployees() {
        API.getAll()
        .then(employeeData => {
            console.log(employeeData);
            setEmployees(employeeData);
        })
        .catch(err => console.log(err));
    }


    return (
        
        <div>
            <SearchBar />

            <EmployeeTable employeeData={employees}/>

        </div>
    )
}

export default EmployeeContainer;