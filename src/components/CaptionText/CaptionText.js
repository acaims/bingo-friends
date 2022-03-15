import { Typography } from "@mui/material";

export const CaptionText = ({ title }) => {
  const textStyle = {
    color: "#fff",
    fontSize: "0.6rem",
    lineHeight: "0.7rem",
    textAlign: "center",
  };

  return (
    <Typography sx={textStyle} variant="caption" display="block" gutterBottom>
      {title}
    </Typography>
  );
};
