import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import SearchBar from "./components/SearchBar/SearchBar"
// import Table from "./components/Table/Table"

function App() {
    return (
        <Router>
            <Jumbotron />
            <div className="container">
                
                <SearchBar />

            </div>
        </Router>
    )
}

export default App;