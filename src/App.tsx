import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Box>
  );
}
export default App;
