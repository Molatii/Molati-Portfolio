import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

export default function Navigation() {
  return (
    <Box bg="#475C78" w="100%" h="70px" mt="0%" ml="0%">
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
          <a href="https://ls.linkedin.com/in/paballo-molati-075313220">
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
          >
            Home
          </Text>
          <Text
            fontSize="2xl"
            fontFamily="Courier New, monospace"
            fontWeight="bold"
            color="white"
            cursor="pointer"
          >
            About
          </Text>
          <Text
            fontSize="2xl"
            fontFamily="Courier New, monospace"
            fontWeight="bold"
            color="white"
            cursor="pointer"
          >
            Contact
          </Text>
        </Stack>
        <Stack w={{ base: "45%", md: "20%" }}>
          <Button
            size="md"
            mt={{ base: "5%", md: "0%" }}
            alignSelf="flex-end"
            w={{ base: "70%", md: "70%" }}
            color="#475C78"
            bg="white"
            borderRadius="8px"
            _hover={{ bg: "yellow.500", color: "white" }}
          >
            Download CV
          </Button>
        </Stack>
      </HStack>
    </Box>
  );
}
