import { Box } from "@chakra-ui/react";
import Footer from "../Components/Footer/footer";
import Navigation from "../Components/Navigation/navigation";
import HeroScetion from "../Pages/HeroSection/hereSection";
import bgCover from "../images/g.jpg";
import About from "../Pages/About/about";
import Projects from "../Pages/Projects/projects";
import Achievements from "../Pages/Achievements/achievements";
import ContactMe from "../Pages/Contact/contactMe";

function Layout() {
  return (
    <Box w="100%" style={{ backgroundImage: `url(${bgCover})` }} mt="-1%">
      <Navigation />
      <HeroScetion />
      <About />
      <Projects />
      <Achievements />
      <ContactMe />
      <Footer />
    </Box>
  );
}

export default Layout;
