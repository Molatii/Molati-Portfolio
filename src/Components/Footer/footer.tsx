import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsCode } from "react-icons/bs";
import { FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import bgCover from "../../images/d.jpg";
import skyCover from "../../images/a.jpg";

function Footer() {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();
  return (
    <Box style={{ backgroundImage: `url(${bgCover})` }} w="100%">
      <HStack pt="25px" pb="10px" w="100%" justifyContent="center" spacing="5%">
        <Text fontSize="3xl" fontFamily="Algerian" color="white">
          <AiFillGithub />
        </Text>
        <Text fontSize="3xl" fontFamily="Algerian" color="white">
          <BsTwitter />
        </Text>
        <Text fontSize="3xl" fontFamily="Algerian" color="white">
          <FaLinkedin />
        </Text>
        <Text fontSize="3xl" fontFamily="Algerian" color="white">
          <BsFacebook />
        </Text>
      </HStack>
      <hr style={{ width: "60%", color: "white", margin: "auto" }} />
      <Stack
        w="100%"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mt={{ base: "5%", md: "2%" }}
        mb={{ base: "5%", md: "1%" }}
      >
        <Stack p="1%" w={{ base: "100%", md: "45%" }} justifyContent="center">
          <Stack direction="row" justifyContent="center">
            <Text
              fontSize="2xl"
              fontFamily="Courier New, monospace"
              fontWeight="bold"
              color="white"
              mt="1%"
            >
              <BsCode />
            </Text>

            <Text
              textAlign="center"
              fontSize="2xl"
              fontFamily="Courier New, monospace"
              fontWeight="bold"
              color="white"
            >
              Let`s Work together
            </Text>
            <Text
              fontSize="2xl"
              fontFamily="Courier New, monospace"
              fontWeight="bold"
              color="white"
              pt="1%"
            >
              <IoCodeSlashOutline />
            </Text>
          </Stack>
          <Text textAlign="center" color="white" fontFamily="sans-serif">
            I am eager to apply my skills and knowledge to a challenging and
            rewarding role in the industry.
          </Text>
        </Stack>
        <Stack w={{ base: "100%", md: "45%" }} justifyContent="center">
          <Stack direction="row" justifyContent="center">
            <Text
              textAlign="center"
              color="white"
              fontSize="2xl"
              fontFamily="Courier New, monospace"
              fontWeight="bold"
            >
              Let`s Connect
            </Text>
            <Text
              fontSize="2xl"
              fontFamily="Courier New, monospace"
              fontWeight="bold"
              color="white"
              pt="1%"
            >
              <FaLaptopCode />
            </Text>
          </Stack>
          <Text fontFamily="sans-serif" textAlign="center" color="white">
            +26659911982
          </Text>
          <Text fontFamily="sans-serif" textAlign="center" color="white">
            molatipaballo@gmail.com
          </Text>
        </Stack>
      </Stack>
      <HStack
        style={{ backgroundImage: `url(${skyCover})` }}
        pt="10px"
        pb="10px"
        w="100%"
      >
        <Stack w="100%" justifyContent="center">
          <Text color="white" fontWeight="bold" textAlign="center">
            &copy;{" "}
            <a
              href="https://ls.linkedin.com/in/paballo-molati-075313220"
              color="white"
            >
              Paballo Molati
            </a>{" "}
            {currentYear} | All rights reserved
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
}

export default Footer;
