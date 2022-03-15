import { Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

export const ImageCard = styled(Card)(() => ({
  position: "relative",
  display: "flex",
}));

export const ImageCardContent = styled(CardContent)(() => ({
  position: "relative",
  backgroundColor: "rgba(0,0,0, 0.6)",
  padding: "0.2rem",
  width: "100%",
  alignSelf: "flex-end",
  "&:last-child": {
    paddingBottom: 0,
  },
}));

export const ImageCardMedia = styled(CardMedia)(() => ({
  position: "absolute",
  width: "100%",
  height: "100%",
}));
