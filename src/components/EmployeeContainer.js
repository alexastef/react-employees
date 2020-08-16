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
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const [sortState, setSortState] = useState("descending");
  // const [searchResults, setResultState] = useState([]);

  // When the page loads, get all the employees
  useEffect(() => {
    getAllEmployees();

    //   const results = employees.filter(employee =>
    //     employee.toLowerCase().includes(searchTerm));

    //   setResultState(results);
    // console.log("in useEffect: ", employees)

    // ensure that first time it has employee data
    //check if filtered array has something contain
    // if (filteredEmployees) {
    //     let filteredData = employees.filter((employee) => {
    //         employee.name.first.includes(searchTerm)
    //     })
    //     setFilteredEmployees(filteredData)
    // }
  }, []);

  function getFilteredArray(query) {
      // this is not the best way to sort by first and last name, it's a little
      // buggy, but it does work. i'll refactor after, but gets the job done to move on and submit homework
    const filteredData = employees.filter(employee => {
      if (
        employee.name.first.toLowerCase().includes(query.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(query.toLowerCase())
      ) {
        return employee;
      }
    });

    setFilteredEmployees(filteredData);
  }

  // useEffect(() => {
  //     const results = employees.filter(employee => employee.name.first.toLowerCase().includes(searchTerm));
  //     setResultState(results);
  //     // setEmployees(results);

  // }, [employees, searchTerm]);

  // get all the employees and set that state to the returned data
  function getAllEmployees() {
    API.getAll()
      .then((employeeData) => {
        setEmployees(employeeData);
      })
      .catch((err) => console.log(err));
  }

  function handleSortClick(event) {
    event.preventDefault();

    // if (event.target.dataset.name === "sort-first") {
    //     setSortState("descending");
    // }
    console.log(event.target.dataset);
    //setstate filteredEmployee
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // pass down filtered user state into employee table
    getFilteredArray(searchTerm);
  };

  return (
    <div>
      <SearchBar handleInputChange={handleInputChange} value={searchTerm} />

      <EmployeeTable
        handleSortClick={handleSortClick}
        employeeData={employees}
        filteredEmployee={filteredEmployees}
      />
      {/* handleBtnClick={handleSortClick} */}
    </div>
  );
}

export default EmployeeContainer;
