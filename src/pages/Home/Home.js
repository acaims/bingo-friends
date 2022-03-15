import { GridContainer } from "../../components/GridContainer";
import { HomeCell } from "./HomeCell";

import categories from "../../constants/categories";
import { Typography } from "@mui/material";
import { NavBar } from "../../components/NavBar";
import { resetCache } from "../../utils/cacheUtils";
import { FlexBox } from "../../components/FlexBox";

export const Home = () => {
  const handleReset = () => {
    resetCache().then(() => {
      window.location.reload(false);
    });
  };

  const renderHeader = () => {
    return (
      <>
        {"BINGO".split("").map((item, index) => (
          <Typography key={index} align="center" sx={{ fontWeight: "bold" }}>
            {item}
          </Typography>
        ))}
      </>
    );
  };

  return (
    <>
      <NavBar onReset={handleReset} />

      <FlexBox sx={{ flexGrow: 1 }}>
        <FlexBox sx={{ flexGrow: 1, justifyContent: "center" }}>
          <GridContainer categories={categories} sx={{ flexGrow: 1 }}>
            {renderHeader()}
            {categories.map((item) => (
              <HomeCell key={item.id} item={item} />
            ))}
          </GridContainer>
        </FlexBox>
        {/* <Box sx={{ height: "100px" }} /> */}
      </FlexBox>
    </>
  );
};
