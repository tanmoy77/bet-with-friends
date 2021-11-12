import React from "react";
import { Button } from "@material-ui/core";

function sidebar() {
  return (
    <div className="sidebar">
      <h2>Hello World</h2>
      <Button color="primary" variant="contained">
        Logout
      </Button>
    </div>
  );
}

export default sidebar;
