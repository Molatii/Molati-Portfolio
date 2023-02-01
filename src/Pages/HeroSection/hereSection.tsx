/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import molati from "../../images/onwer.jpg";

export default function HeroSection() {
  // Scroll to projects
  const projects = () => {
    scroll.scrollTo(1115);
  };
  const mobileProjects = () => {
    scroll.scrollTo(1565);
  };
  // Scroll to contact me section
  const contact = () => {
    scroll.scrollTo(2150);
  };
  const mobileContact = () => {
    scroll.scrollTo(3670);
  };
  return (
    <Container maxW="5xl" py={12} pb={{ base: "10%", md: "7.5%" }}>
      <SimpleGrid mt="15%" columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack>
          <Text
            fontFamily="sans-serif"
            fontSize="5xl"
            mb="-3%"
            color="white"
            fontWeight="bold"
          >
            Paballo Molati
          </Text>
          <Stack alignItems="left" direction="row" pb="4%">
            <hr
              style={{
                width: "15%",
                color: "white",
                marginTop: "18px",
                height: "5px",
              }}
            />
            <Text fontFamily="serif" color="gray.100" pb="4%" fontSize="2xl">
              Software Engineer
            </Text>
          </Stack>
          <Text color="gray.200" fontSize="lg" pb="6%">
            I'm a creative software enginneer based in Lesotho with a 1+ year
            experience. I'm also passionnate and dedicated to my work.
          </Text>
          <Stack spacing={4}>
            <HStack display={{ base: "block", md: "none" }}>
              <Button
                fontWeight="bold"
                color="white"
                fontFamily="sans-serif"
                bg="purple.800"
                _hover={{ bg: "blue.400", color: "white" }}
                w="35%"
                onClick={mobileContact}
              >
                Get In Touch
              </Button>
              <Button
                fontWeight="bold"
                colorScheme="#FF5F0F"
                color="white"
                letterSpacing={1}
                _hover={{
                  bg: "blue.400",
                }}
                w={{ base: "50%", md: "35%" }}
                onClick={mobileProjects}
              >
                My Projects
                <Text
                  fontSize="xl"
                  fontFamily="Courier New, monospace"
                  fontWeight="bold"
                  color="white"
                  ml={2}
                  pt="1.5%"
                >
                  <FaLaptopCode />
                </Text>
              </Button>
            </HStack>
            <HStack display={{ base: "none", md: "block" }}>
              <Button
                fontWeight="bold"
                color="white"
                fontFamily="sans-serif"
                bg="purple.800"
                _hover={{ bg: "blue.400", color: "white" }}
                w="35%"
                onClick={contact}
              >
                Get In Touch
              </Button>
              <Button
                fontWeight="bold"
                colorScheme="#FF5F0F"
                color="white"
                letterSpacing={1}
                _hover={{
                  bg: "blue.400",
                }}
                w={{ base: "50%", md: "35%" }}
                onClick={projects}
              >
                My Projects
                <Text
                  fontSize="xl"
                  fontFamily="Courier New, monospace"
                  fontWeight="bold"
                  color="white"
                  ml={2}
                  pt="1.5%"
                >
                  <FaLaptopCode />
                </Text>
              </Button>
            </HStack>
            <Stack direction="row" pt={{ base: "3%", md: "5%" }}>
              <Text color="white" fontFamily="sans-serif" fontSize="larger">
                Follow me on:
              </Text>
              <a href="https://ls.linkedin.com/in/paballo-molati-075313220">
                <Text
                  cursor="pointer"
                  fontSize="larger"
                  pt={1}
                  pl={3}
                  color="white"
                >
                  <BsLinkedin />
                </Text>
              </a>
              <a href="https://twitter.com/EricMolati">
                <Text
                  cursor="pointer"
                  fontSize="larger"
                  pt={1}
                  pl={2}
                  color="white"
                >
                  <BsTwitter />
                </Text>
              </a>
              <a href="https://web.facebook.com/paballo.maloti">
                <Text
                  cursor="pointer"
                  fontSize="larger"
                  pt={1}
                  pl={2}
                  color="white"
                >
                  <BsFacebook />
                </Text>
              </a>
            </Stack>
          </Stack>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Image
            alt="Contact Us image"
            w="80%"
            borderRadius="30% 70% 70% 30% / 30% 30% 80% 70%"
            h="100%"
            src={molati}
            objectFit="scale-down"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
