import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained">
      <Button sx={{ backgroundColor: "#515151" }}>-</Button>
      <Button sx={{ textTransform: "inherit" }} variant="outlined">
        aA
      </Button>
      <Button sx={{ backgroundColor: "#515151" }}>+</Button>
    </ButtonGroup>
  );
}
