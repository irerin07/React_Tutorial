import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>Introduction</h1>
      <p>this project is for basics of react router</p>
      {showDetail && <p>you've set the value of detail to true!</p>}
    </div>
  );
};
export default About;
