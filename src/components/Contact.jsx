import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";

function Contact() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  },[]);
  return (
    <div>
      <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
        <div className="title">
          <h1>
            You can
            <br /> <span style={{ color: "#5aff3d" }}>Contact me</span>
          </h1>
        </div>
      </Collapse>
    </div>
  );
}

export default Contact;
