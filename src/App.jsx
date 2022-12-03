import React, { useState } from "react";
import data from "../src/data/data.json";

function App() {
  const [jobData, setJobData] = useState(data);
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    let tempFilters = [...filters]
    const idx = tempFilters.findIndex((x) => x === filter)
    console.log("role", filter)
    console.log("Index", idx)
    if (idx < 0) tempFilters.push(filter)
    
    setFilters(tempFilters)
  }

  const removeFilter = (filter) => {
    
    let tempFilters = filters.filter((x) => x !== filter)
    setFilters(tempFilters)
  }

  const clearFilters = () => {
    setFilters([])
  }


  

  return (
    <div className="App">
      <header>
        <picture>
          <source
            media="(min-width:969px)"
            srcSet="/images/bg-header-desktop.svg"
          />
          <img src="images/bg-header-mobile.svg" />
        </picture>
      </header>
      <main>
        <div className={`filterBox ${filters.length > 0 ? "open" : ""}`}>
          <div>
            {filters?.length > 0 &&
              filters.map((filter, index) => (
                <div className="filterWrapper" key={index}>
                  <div className="filter">{filter}</div>
                  <button className="filterClose" onClick={() => removeFilter(filter)} >
                    <img src="images/icon-remove.svg" />
                  </button>
                </div>
              ))}
          </div>
          <div className="filterClear" onClick={clearFilters}><a href="/"></a>Clear</div>
        </div>

        <div className="jobList">
          {jobData &&
            jobData.map((job, index) => (
              <div className={`job ${job?.featured ? "featured" : ""}`} key={job.id}>
                <div className="logo">
                  <img src={`/images/${job.logo}`} />
                </div>
                <div className="job__info">
                  <div className="job__infoHeader">
                    <div className="company">{job.company}</div>
                    {job?.new && (
                      <div className="new">
                        <span>NEW!</span>
                      </div>
                    )}
                    {job?.featured && (
                      <div className="featured">
                        <span>FEATURED</span>
                      </div>
                    )}
                  </div>
                  <div className="job__position">{job.position}</div>
                  <div className="job__detailsWrapper">
                    <div className="postedAt">{job.postedAt}</div>
                    <div className="dot"></div>
                    <div className="contract">{job.contract}</div>
                    <div className="dot"></div>
                    <div className="location">{job.location}</div>
                  </div>
                </div>
                <div className="tags">
                  <button className="tag" onClick={() => {addFilter(job.role)}}>{job.role}</button>
                  <button className="tag" onClick={() => {addFilter(job.level)}}>{job.level}</button>
                  {job.languages &&
                    job.languages.map((language, languageIndex) => (
                      <button  className="tag" key={languageIndex} onClick={() => {addFilter(language)}}>
                        {language}
                      </button>
                    ))}

                  {job.tools &&
                    job.tools.map((tool, toolIndex) => (
                      <div className="tag" key={toolIndex} onClick={() => {addFilter(tool)}}>
                        <a>{tool}</a>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
