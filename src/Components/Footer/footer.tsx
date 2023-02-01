import { Box, HStack, Stack, Text } from "@chakra-ui/react";
// import bgCover from "../../images/a.jpg";

function Footer() {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();
  return (
    <Box bg="purple.800" backgroundSize="200%" marginTop="auto" w="100%">
      <HStack pt="10px" pb="10px" w="100%">
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
