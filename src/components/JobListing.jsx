import React, { useState, useEffect } from "react";
import FilterBox from "./FilterBox";
import JobItem from "./JobItem";

import "../styles/joblisting.scss";
import data from "../../src/data/data.json";

// we could wrap the Filter box and listings in Context
// but it seems overkill for one layer.

const JobListing = () => {
  const [jobData, setJobData] = useState(data); // this is the stateof truth

  // this requires almost n x 2 in memory, but it is easy. An
  // alternative would be to add a "active" key to each job.
  // However having an active class means looping through n
  // times every time a filter changes even if only one active
  const [filteredJobData, setFilteredJobData] = useState([].concat(data));
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredJobData(jobData);
      return;
    }
    let tempJobData = [];
    let tempFilters = filters.map((x) => x.name);

    jobData.forEach((job) => {
      let tags = [job.role, job.level, ...job.languages, ...job.tools];
      if (tempFilters.every((elem) => tags.includes(elem))) {
        tempJobData.push(job);
      }
    });

    setFilteredJobData(tempJobData);

    return () => {
      setFilteredJobData(jobData);
    };
  }, [filters]);

  const addFilter = (filter, type) => {
    let tempFilters = [...filters];
    const idx = tempFilters.findIndex((x) => x.name === filter);
    if (idx < 0)
      tempFilters.push({
        name: filter,
        type,
      });

    setFilters(tempFilters);
  };

  const removeFilter = (filter) => {
    let tempFilters = filters.filter((x) => x.name !== filter.name);
    setFilters(tempFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <FilterBox
        filters={filters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />

      <div className="jobList">
        {filteredJobData &&
          filteredJobData.map((job, index) => (
            <JobItem key={index} job={job} addFilter={addFilter} />
          ))}
      </div>
    </>
  );
};

export default JobListing;
