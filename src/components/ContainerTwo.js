import React, { Component } from "react";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow/index.js.js";

class ContainerTwo extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        search: ""
    };

    componentDidMount() {
        this.getAllEmployees();
    };

    getAllEmployees = () => {
        API.getAll()
        .then(employeeData => {
            this.setState({
                firstName: employeeData.name.first,
                lastName: employeeData.name.last,
                email: employeeData.email
            })
        })
        .catch(err => console.log(err))
    }

    renderEmployees() {
        return <EmployeeRow 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email} />
    }

    render() {
        return (
            <div>
            <SearchBar />
            <EmployeeTable>{this.renderEmployees()}</EmployeeTable>
                
        </div>
        )

        
    }
}

export default ContainerTwo;