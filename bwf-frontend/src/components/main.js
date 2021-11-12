import React from "react";
import GroupList from "./groupList";
import { Switch, Route } from "react-router-dom";
import GroupDetails from "./groupDetails";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <GroupList />
        </Route>
        <Route exact path="/details/:id">
          <GroupDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
