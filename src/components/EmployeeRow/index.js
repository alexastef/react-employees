// import React, { useState } from "react";
import React from "react";

function EmployeeRow(props) {
  const isFiltered = props.filteredData;
  const isSorted = props.sortedData;

  if (isFiltered.length > 0) {
    return <>{renderFilteredEmployees(isFiltered)}</>;
  } else if (isSorted === props.employeeData) {
      return <>{renderFilteredEmployees(isSorted)}</>;
  }
  else {
    return <>{renderEmployeeRows(props)}</>;
  }
}

function renderEmployeeRows(props) {
  // call sort function so employees automatically render alphabetically by last name
  const sortedEmployees = sortEmployees(props);

  // map the employee data to return the jsx table rows
  return sortedEmployees.map((employee) => {
    return (
      <tr key={employee.login.uuid.split("-")[1].toUpperCase()}>
        <th scope="row">{employee.login.uuid.split("-")[1].toUpperCase()}</th>
        <td>
          <img
            className="row-img"
            src={employee.picture.thumbnail}
            alt="emp-thumbnail"
          />
        </td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
        <td>{employee.location.city}</td>
        <td>{employee.location.state}</td>
      </tr>
    );
  });
}

function renderFilteredEmployees(filteredEmployees) {
  return filteredEmployees.map((employee) => {
    return (
      <tr key={employee.login.uuid.split("-")[1].toUpperCase()}>
        <th scope="row">{employee.login.uuid.split("-")[1].toUpperCase()}</th>
        <td>
          <img
            className="row-img"
            src={employee.picture.thumbnail}
            alt="emp-thumbnail"
          />
        </td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
        <td>{employee.location.city}</td>
        <td>{employee.location.state}</td>
      </tr>
    );
  });
}

// sort all employees based on last name
function sortEmployees(props) {
  function compare(a, b) {
    const empA = a.name.last.toUpperCase();
    const empB = b.name.last.toUpperCase();

    let comparison = 0;
    if (empA > empB) {
      comparison = 1;
    } else if (empA < empB) {
      comparison = -1;
    }
    return comparison;
  }

  const sortedArray = props.employeeData.sort(compare);
  return sortedArray;
}

export default EmployeeRow;
