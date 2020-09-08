import React from "react";
import { Button } from "@material-ui/core";

function CommonBtn({ name, type ,color,size }) {
  return (
    <div>
      <Button variant="contained" color={color} type={type} size={size}>
        {name}
      </Button>
    </div>
  );
}

export default CommonBtn;