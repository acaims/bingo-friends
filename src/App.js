import "./App.css";
import { Home } from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { FlexBox } from "./components/FlexBox";
import { theme } from "./utils/themeUtils";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FlexBox className="full-height">
        <Home />
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
