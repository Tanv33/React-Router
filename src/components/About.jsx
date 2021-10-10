import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";

function About() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[]);
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
      <div className="title">
        <h1>
          Hey You are on
          <br /> <span style={{ color: "#5aff3d" }}>About Page</span>
        </h1>
      </div>
    </Collapse>
  );
}

export default About;
