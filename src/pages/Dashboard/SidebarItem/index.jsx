import { Stack, Typography } from "@mui/material";

export const SidebarItem = ({ title, content }) => {
  return (
    <div>
      <Stack flexDirection="row" sx={{ pl: 1 }}>
        <Typography variant="subtitle2" color="primary.light">
          {title}:
        </Typography>
        <Typography variant="subtitle1" sx={{ ml: 1 }} color="secondary.dark">
          {content}
        </Typography>
      </Stack>
    </div>
  );
};
