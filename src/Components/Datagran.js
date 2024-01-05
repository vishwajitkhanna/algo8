import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Datagran() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth size="small">
        <InputLabel
          sx={{ fontSize: 10, color: "#ffffff" }}
          id="demo-simple-select-label"
        >
          Filter Data Granularity
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // label="Filter Data Gr"
          onChange={handleChange}
          style={{ height: 30, backgroundColor: "#0077B6" }}
        >
          <MenuItem sx={{ fontSize: 10 }} value={10}>
            Hourly
          </MenuItem>
          <MenuItem sx={{ fontSize: 10 }} value={20}>
            Daily
          </MenuItem>
          <MenuItem sx={{ fontSize: 10 }} value={30}>
            Monthly
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
