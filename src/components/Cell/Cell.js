import { Input } from "@mui/material";
import { Box } from "@mui/system";
import { CaptionText } from "../CaptionText";
import { ImageCard, ImageCardContent, ImageCardMedia } from "../ImageCard";

export const Cell = ({ baseUrl, title, id, image, onChange }) => {
  const absolutePosition = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    padding: 0.1,
  };

  const backdrop = {
    backgroundColor: "#000",
    opacity: 0.1,
    position: "absolute",
    width: "100%",
    height: "100%",
    filter: "blur(1px)",
  };

  return (
    <ImageCard sx={{ minHeight: 100, position: "relative" }}>
      <ImageCardMedia image={image}></ImageCardMedia>
      <Box sx={backdrop}> </Box>
      <ImageCardContent>
        <CaptionText title={title} />
      </ImageCardContent>
      <Box sx={absolutePosition}>
        <label htmlFor={`icon-button-${id}`} style={{ flex: 1 }}>
          <Input
            style={{
              display: "none",
            }}
            accept="image/*"
            id={`icon-button-${id}`}
            type="file"
            onChange={onChange}
          />
          {/* <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          ></IconButton> */}
        </label>
      </Box>
    </ImageCard>
  );
};
