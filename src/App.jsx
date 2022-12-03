import React, { useState } from "react";
import data from "../src/data/data.json";

function App() {
  const [jobDat, setJobData] = useState(data);

  return (
    <div className="App">
      <main>
        <div className="search"></div>
        <div className="jobList">
          {data &&
            data.map((job, index) => (
              <div className="job" key={index}>
                <div className="logo">
                  <img src={`/images/${job.logo}`} />
                </div>
                <div className="job__info">
                  <div className="job__infoHeader">
                    <div className="company">{job.company}</div>
                    {job?.featured && <div className="featured"></div>}
                    {job?.new && <div className="new"></div>}
                  </div>
                  <div className="job__position">{job.position}</div>
                  <div className="job__detailsWrapper">
                    <div className="postedAt">{job.postedAt}</div>  
                    <div className="contract">{job.contract}</div>  
                    <div className="location">{job.location}</div>  
                  </div>
                </div>
                <div className="tags">
                  <div className="tag">{job.role}</div>
                  <div className="tag">{job.level}</div>
                  {job.languages && job.languages.map((language, languageIndex) => (
                    <div className="tag" key={languageIndex}>{language}</div>
                  ))}

                  {job.tools && job.tools.map((tool, toolIndex) => (
                    <div className="tag" key={toolIndex}>{tool}</div>
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
