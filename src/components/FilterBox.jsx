import React from "react";
import "../styles/joblisting.scss";
const FilterBox = ({ filters, removeFilter, clearFilters }) => {
  return (
    <div className={`filterBox ${filters.length > 0 ? "open" : ""}`}>
      <div>
        {filters?.length > 0 &&
          filters.map((filter, index) => (
            <div className="filterWrapper" key={index}>
              <div className="filter">{filter.name}</div>
              <button
                className="filterClose"
                onClick={() => removeFilter(filter)}
              >
                <img src="images/icon-remove.svg" alt="remove filter icon"/>
              </button>
            </div>
          ))}
      </div>
      <div className="filterClear" onClick={clearFilters}>
        <a href="/">Clear</a>
      </div>
    </div>
  );
};

export default FilterBox;
