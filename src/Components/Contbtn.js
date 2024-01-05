import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ContButtonGroup() {
  return (
    <ButtonGroup id="document-btn5" variant="contained">
      <Button className="document-btn6" sx={{ backgroundColor: "#0077B6" }}>
        -
      </Button>
      <Button
        className="document-btn6"
        sx={{ textTransform: "inherit" }}
        variant="outlined"
      >
        100%
      </Button>
      <Button className="document-btn6" sx={{ backgroundColor: "#0077B6" }}>
        +
      </Button>
    </ButtonGroup>
  );
}
