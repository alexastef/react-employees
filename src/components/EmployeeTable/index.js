import React, {useState, useEffect} from "react";
// import "./style.css";
import EmployeeRow from "../EmployeeRow/index.js";
// import EmployeeRow from "../EmployeeRow/index.js.js"
import TableHeader from "../TableHeader";

// Props are not used here but are passed to the rows
function EmployeeTable(props) {

    // const [filteredEmployees, setFilteredEmployees] = useState([])

    // console.log(props.filteredEmployee)
    // need second use effect in here

    const [sortState, setSortState] = useState("descending");

    // function sortEmployees(event) {
    //     event.preventDefault();

    //     switch (event.target.dataset.name) {
    //         case "sort-first":
    //             sortByFirst();
    //             break;
    //         case "sort-last":
    //             sortByLast();
    //             break;
    //         case "sort-state":
    //             sortByState();
    //             break;
    //         default:
    //             sortByLast(); 
    //     }
    // }

    // function sortByFirst() {
    //     if (sortState === "descending") {
    //         setSortState("ascending");
    //         console.log(sortState);
    //     }
    // }
    // give arrow buttons the handle sort click functionality to set state of parents
    return (
            <table className="table table-striped table-sortable table-sm">
                <TableHeader handleSortClick={props.handleSortClick}/>
                <tbody>

                <EmployeeRow employeeData={props.employeeData} filteredData={props.filteredEmployee}/>

                </tbody>
            </table>
    );



}

export default EmployeeTable;

