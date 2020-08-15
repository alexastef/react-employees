import React from "react";
import Jumbotron from "./components/Jumbotron";
// import ContainerTwo from "./components/ContainerTwo"
import EmployeeContainer from "./components/EmployeeContainer";

function App() {
    return (
        <div>
            <Jumbotron />
            <div className="container">
            
            {/* <ContainerTwo /> */}
                <EmployeeContainer />
            </div>
        </div>
    )
}

export default App;