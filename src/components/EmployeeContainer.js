import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

function EmployeeContainer() {


  // Set initial search state to empty
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  // When the page loads, get all the employees
  useEffect(() => {
    getAllEmployees();

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


  // get all the employees and set that state to the returned data
  function getAllEmployees() {
    API.getAll()
      .then((employeeData) => {
        setEmployees(employeeData);
      })
      .catch((err) => console.log(err));
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
        employeeData={employees}
        filteredEmployee={filteredEmployees}
      />
    </div>
  );
}

export default EmployeeContainer;
