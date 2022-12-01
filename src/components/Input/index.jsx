import "./index.css";
import { Button, TextField as MuiInput, Typography } from "@mui/material";
import { Stack } from "@mui/system";
export const Input = ({
  title,
  tipo,
  fundo,
  value,
  name,
  onChange,
  error,
  ...props
}) => {
  return (
    <Stack className="left_stack">
      <span>{title}</span>
      <MuiInput
        style={{ color: "white" }}
        className="input"
        type={tipo}
        placeholder={fundo}
        onChange={onChange}
        value={value}
        variant="standard"
        name={name}
        {...props}
        helperText={error}
      ></MuiInput>
      {/* {error && <Typography>{error}</Typography>} */}
    </Stack>
  );
};
