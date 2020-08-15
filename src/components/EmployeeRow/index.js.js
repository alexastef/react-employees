// import React, { useState } from "react";
import React from "react";


function EmployeeRow(props) {

        return (
            <>
            {renderEmployeeRows(props)}
            </>
        )
}

function renderEmployeeRows(props) {

        // call sort function so employees automatically render alphabetically by last name
        const sortedEmployees = sortEmployees(props);
       
        // map the employee data to return the jsx table rows
        return sortedEmployees.map((employee) => {
            return (
                <tr key={sortedEmployees.indexOf(employee) +1}>
                <th scope="row">{sortedEmployees.indexOf(employee) + 1}</th>
                 <td><img className="row-img" src={employee.picture.thumbnail} alt="emp-thumbnail" /></td>
                 <td>{employee.name.first}</td>
                 <td>{employee.name.last}</td> 
                 <td>{employee.email}</td>
                 <td>{employee.phone}</td>
                 <td>{employee.location.city}</td>
                 <td>{employee.location.state}</td>
            </tr>
            )
        })
}

// sort all employees based on last name
function sortEmployees(props) {

    function compare(a,b) {
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