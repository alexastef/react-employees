import React, { useState, useEffect } from "react";
// import "./style.css";
import EmployeeRow from "../EmployeeRow/index.js";
// import EmployeeRow from "../EmployeeRow/index.js.js"
import TableHeader from "../TableHeader";


function EmployeeTable(props) {


  const [sortFirst, setSortFirst] = useState("");
  const [sortLast, setSortLast] = useState("descending");
  const [sortLocation, setSortLoc] = useState("");

  const [sortedEmployees, setSortedEmployees] = useState(props.employeeData);


  function handleSortClick(event) {
    const sortClicked = event.target.dataset.name;
    // this console logs the correct thing, but then the handlers don't work
    console.log(sortClicked)


    if (sortClicked === "sort-first") {
      if (sortFirst === "ascending" || sortFirst === "") {
          setSortFirst("descending");
          setSortLast("");
          sortFirstDescending(props);
        // } else if (sortFirst === "descending") {
        //     sortFirstAscending(props);
        //     // sortFirstAscending(props)
        // }
      } 
      if (sortClicked === "sort-last") {
          if (sortLast === "ascending" || sortLocation === "") {
            setSortLast("descending");
            sortLastDescending(props);
          }
      }
      if (sortClicked === "sort-location") {
        // if (sortLocation === "ascending" || sortLocation === "") {
          sortLocDescending(props);
        // }
      }
    }
  }

    function sortFirstDescending(props) {
        console.log("hitting here");
      function compare(a, b) {
        const empA = a.name.first.toUpperCase();
        const empB = b.name.first.toUpperCase();

        let comparison = 0;
        if (empA > empB) {
          comparison = 1;
        } else if (empA < empB) {
          comparison = -1;
        }
        return comparison;
      }

      const sortedArray = props.employeeData.sort(compare);
      setSortedEmployees(sortedArray);
    }
    function sortLocDescending(props) {
        console.log("hitting in state sort");
        function compare(a, b) {
            const empA = a.location.state.toUpperCase();
            const empB = b.location.state.toUpperCase();
    
            let comparison = 0;
            if (empA > empB) {
              comparison = 1;
            } else if (empA < empB) {
              comparison = -1;
            }
            return comparison;
          }
    
          const sortedArray = props.employeeData.sort(compare);
          setSortedEmployees(sortedArray);
    } 
    function sortLastDescending(props) {
        console.log("hitting in sort last")
        function compare(a, b) {
            const empA = a.location.state.toUpperCase();
            const empB = b.location.state.toUpperCase();
    
            let comparison = 0;
            if (empA > empB) {
              comparison = 1;
            } else if (empA < empB) {
              comparison = -1;
            }
            return comparison;
          }
    
          const sortedArray = props.employeeData.sort(compare);
          setSortedEmployees(sortedArray);
    }

    
    return (
      <table className="table table-striped table-sortable table-md">
        <TableHeader 
        handleSortClick={handleSortClick}
        // handleSortLast={handleSortClickLast}
        // handleSortLocation={handleSortClickLocation} 
        />
        <tbody>
          <EmployeeRow
            employeeData={props.employeeData}
            filteredData={props.filteredEmployee}
            sortedData={sortedEmployees}
          />
        </tbody>
      </table>
    );
  }

  

export default EmployeeTable;
