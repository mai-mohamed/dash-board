import React from "react";
import { TextField } from "@material-ui/core";
function CommonInputText({ name, label, handleChange }) {
  return (
    <div>
      <TextField label={label} name={name} onChange={handleChange} />
    </div>
  );
}

export default CommonInputText;