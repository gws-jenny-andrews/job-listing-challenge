import React from 'react'

const JobItem = ({job, addFilter}) => {
  return (
    <div
              className={`job ${job?.featured ? "featured" : ""}`}
              key={job.id}
            >
              <div className="logo">
                <img src={`/images/${job.logo}`} alt="company logo" />
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
                <button
                  className="tag"
                  onClick={() => {
                    addFilter(job.role, "role");
                  }}
                >
                  {job.role}
                </button>
                <button
                  className="tag"
                  onClick={() => {
                    addFilter(job.level, "level");
                  }}
                >
                  {job.level}
                </button>
                {job.languages &&
                  job.languages.map((language, languageIndex) => (
                    <button
                      className="tag"
                      key={languageIndex}
                      onClick={() => {
                        addFilter(language, "language");
                      }}
                    >
                      {language}
                    </button>
                  ))}

                {job.tools &&
                  job.tools.map((tool, toolIndex) => (
                    <div
                      className="tag"
                      key={toolIndex}
                      onClick={() => {
                        addFilter(tool, "tool");
                      }}
                    >
                      <a>{tool}</a>
                    </div>
                  ))}
              </div>
            </div>
  )
}

export default JobItem