import { RightBar, Header, Main, SideBar } from "./lib";
import { Stack } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-between"}
        sx={{ margin: "0 16px" }}
      >
        <SideBar />
        <Main />
        <RightBar />
      </Stack>
    </div>
  );
}

export default App;
