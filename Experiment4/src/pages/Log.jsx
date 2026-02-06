import React from "react";
import { ListItem, ListItemText, Box } from "@mui/material";

const Log = ({ id, activity, carbon }) => {
  const backgroundColor =
    carbon <= 3 ? "lightgreen" : carbon <= 6 ? "orange" : "red";

  return (
    <ListItem
      sx={{
        backgroundColor,
        border: "1px solid grey",
        padding: "1rem",
        margin: "1rem",
        display: "flex",
        gap: "2rem",
      }}
    >
      <ListItemText primary={`ID: ${id}`} />
      <ListItemText primary={`Activity: ${activity}`} />
      <ListItemText primary={`Carbon: ${carbon}`} />
    </ListItem>
  );
};

export default React.memo(Log);