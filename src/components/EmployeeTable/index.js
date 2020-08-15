import React from "react";
// import "./style.css";
import EmployeeRow from "../EmployeeRow/index.js";
// import EmployeeRow from "../EmployeeRow/index.js.js"
import TableHeader from "../TableHeader";

// Props are not used here but are passed to the rows
function EmployeeTable(props) {

    
    return (
            <table className="table table-striped table-sortable">
                <TableHeader />
                <tbody>

                <EmployeeRow employeeData={props.employeeData}/>

                </tbody>
            </table>
        );

}

export default EmployeeTable;

