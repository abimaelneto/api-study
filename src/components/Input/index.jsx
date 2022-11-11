import { TextField } from "@mui/material";
import "./index.css";
export const Input = ({ variant = "standard", ...props }) => {
  return (
    <TextField
      variant={variant}
      {...props}
      sx={{ marginY: "1rem" }}
    ></TextField>
  );
};
