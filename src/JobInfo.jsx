import React from "react";
import Duties from "./Duties";

const JobInfo = ({ data, currentItem }) => {
  const { id, title, duties, company, dates } = data[currentItem];
  return (
    <article className="job-info" key={id}>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
