import { Stack, Typography } from "@mui/material";

export const SidebarItem = ({ title, content }) => {
  return (
    <div className="itens-info-user">
      <Stack flexDirection="row" sx={{ pl: 1 }}>
        <Typography>{title}:</Typography>
        <Typography sx={{ ml: 1 }} color="#008080">
          {content}
        </Typography>
      </Stack>
    </div>
  );
};
