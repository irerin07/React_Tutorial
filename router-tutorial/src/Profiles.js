import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
// import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white"
  };
  return (
    <div>
      <h3>list of users</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/irerin07" active>
            irerin07
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/Macallan" active>
            Macallan
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exactrender={() => <div>select a user.</div>} />
      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;
