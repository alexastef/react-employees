import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <form >
          <div className="input-group mb-3">
            <input
              id="employeeSearch"
              type="text"
              className="form-control"
              placeholder="Search Employees"
              aria-describedby="button-addon2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

// maybe add functionality where you can search by name, city, or phone number and then it filters only for that
