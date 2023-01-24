import { Box, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer/footer";
import Navigation from "../Components/Navigation/navigation";

function Layout() {
  return (
    <Box w="100%" bg="#475C78" mt="-1%">
      <Navigation />
      <Text>Body here</Text>
      <Footer />
    </Box>
  );
}

export default Layout;
