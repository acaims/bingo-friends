import { Box } from "@mui/system";

export const GridContainer = ({ children }) => {
  const columnSize = 5;

  return (
    <Box
      alignItems="stretch"
      justifyItems="stretch"
      sx={{
        display: "grid",
        gap: 0.25,
        margin: "0.5rem 0.25rem",
        gridTemplateColumns: `repeat(${columnSize}, 1fr)`,
      }}
    >
      {children}
    </Box>
  );
};
