import { Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";

function Home() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[]);
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
      <div className="title">
        <h1>
          Welcome To <br /> <span style={{ color: "#5aff3d" }}> Home Page</span>
        </h1>
      </div>
    </Collapse>
  );
}

export default Home;
