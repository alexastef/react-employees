import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <form>
          <div className="input-group mb-3">
            <input
              id="employeeSearch"
              type="text"
              className="form-control"
              placeholder="Search Employees"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                type="submit"
                className="btn btn-outline-secondary btn-light"
                id="searchBtn"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

// maybe add functionality where you can search by name, city, or phone number and then it filters only for that
