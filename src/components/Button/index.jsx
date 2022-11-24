import React from "react";
import { Button as MuiButton } from "@mui/material";
export const Button = (
  {
    text,
    ...props
  }
) => {
  return (
    <MuiButton
      {
      ...props
      }
    >
      {text}
    </MuiButton>
  )
}
