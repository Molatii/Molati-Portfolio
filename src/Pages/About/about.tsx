/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Stack, Image, Text } from "@chakra-ui/react";
import DownloadButton from "../../Components/DownloadBtn/downloadButton";
import aboutImg from "../../images/svg images/ab.svg";

const Zoom = require("react-reveal/Zoom");

function About() {
  return (
    <Box w="100%" bg="purple.800" alignItems="center">
      <Container maxW="5xl">
        <Stack
          spacing={10}
          pt="6%"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack w={{ base: "100%", md: "50%" }}>
            <Zoom>
              <Image
                rounded="md"
                mb="2%"
                alt="Contact Us image"
                src={aboutImg}
                objectFit="cover"
              />
            </Zoom>
          </Stack>

          <Stack w={{ base: "100%", md: "50%" }}>
            <Stack alignItems="left" direction="row" pb="4%" spacing="1">
              <Text
                fontFamily="sans-serif"
                fontWeight="semibold"
                color="white"
                fontSize="3xl"
              >
                About me
              </Text>
              <hr
                style={{
                  width: "10%",
                  color: "white",
                  marginTop: "33px",
                  height: "5px",
                }}
              />
            </Stack>
            <Text color="gray.100" pb="2%">
              As a software engineer with a Bsc (Hons) in Mobile Computing, I am
              excited to bring my enthusiasm and strong work ethic to a
              productive team environment. I am also eager to continue learning
              and growing as a professional in this field. I am confident in my
              ability to collaborate effectively with others and make
              contributions to any project.
            </Text>
            <Text color="gray.100" pb="8%">
              In my career i have developed Mobile Apps using Android, Ionic and
              SQL. On the otherhand, i have been developing Web sites using
              React Js/TypeScript, HTML and PHP. State Management Libraries i
              have used in React include Redux Toolkit, React Query and Zustand.
            </Text>
            <Stack w="75%" justifyContent="flex-start" pb="4%">
              <DownloadButton />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
