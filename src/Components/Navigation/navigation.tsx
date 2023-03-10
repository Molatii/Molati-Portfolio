import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import bgCover from "../../images/d.jpg";
import DownloadButton from "../DownloadBtn/downloadButton";

export default function Navigation() {
  // Scroll to top
  const top = () => {
    scroll.scrollTo(0);
  };
  // Scroll to about section
  const about = () => {
    scroll.scrollTo(510);
  };
  // Scroll to contact  me section
  const contact = () => {
    scroll.scrollTo(2140);
  };
  return (
    <Box
      pos="fixed"
      zIndex={2}
      style={{ backgroundImage: `url(${bgCover})` }}
      w="100%"
      h="70px"
      mt="0%"
      ml="0%"
    >
      <HStack
        alignItems="center"
        justifyContent="center"
        p="1%"
        w="100%"
        mt="1%"
        mb="1%"
        cursor="pointer"
      >
        <Stack
          w={{ base: "45%", md: "20%" }}
          direction="row"
          mt={{ base: "2%", md: "0%" }}
        >
          <a href="https://github.com/Molatii?tab=repositories">
            <Stack direction="row" ml="-1.5">
              <Text
                mt={{ base: "3%", md: "3%" }}
                fontSize="3xl"
                fontFamily="Algerian"
                color="white"
              >
                <AiFillGithub />
              </Text>
              <Text
                mt={{ base: "5%", md: "0%" }}
                fontSize="3xl"
                fontFamily="Algerian"
                color="white"
              >
                Pablo
              </Text>
            </Stack>
          </a>
        </Stack>

        <Stack
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          spacing="8%"
          w="50%"
          direction="row"
        >
          <Text
            fontSize="2xl"
            fontFamily="Courier New, monospace"
            ml="8%"
            fontWeight="bold"
            color="white"
            cursor="pointer"
            _hover={{ color: "blue.400" }}
            onClick={top}
          >
            Home
          </Text>
          <Text
            fontSize="2xl"
            fontFamily="Courier New, monospace"
            fontWeight="bold"
            color="white"
            cursor="pointer"
            _hover={{ color: "blue.400" }}
            onClick={about}
          >
            About
          </Text>
          <Text
            fontSize="2xl"
            fontFamily="Courier New, monospace"
            fontWeight="bold"
            color="white"
            cursor="pointer"
            _hover={{ color: "blue.400" }}
            onClick={contact}
          >
            Contact
          </Text>
        </Stack>
        <Stack w={{ base: "45%", md: "20%" }}>
          <DownloadButton />
        </Stack>
      </HStack>
    </Box>
  );
}
