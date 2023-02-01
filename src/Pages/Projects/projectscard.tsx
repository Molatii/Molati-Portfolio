import { Box, Text, Button, Image, Stack } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";

interface ProjectProps {
  title: string;
  desc: string;
  picture: string;
  webLink: string;
  gitHubLink: string;
}

export default function ProjectsCard({
  title,
  webLink,
  gitHubLink,
  desc,
  picture,
  ...rest
}: ProjectProps) {
  return (
    <Box borderRadius={15} {...rest}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Stack>
          <Text
            color="gray.700"
            textAlign="center"
            fontWeight="bold"
            fontFamily="sans-serif"
            fontSize="2xl"
          >
            {title}
          </Text>
        </Stack>
        <Stack>
          <Image borderRadius={15} alt="Project_Img" src={picture} />
        </Stack>
        <Stack direction="row">
          <Text
            textAlign="center"
            color="gray.700"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize="lg"
          >
            {desc}
          </Text>
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <a href={gitHubLink} color="white">
            <Button
              fontWeight="bold"
              colorScheme="#FF5F0F"
              color="white"
              textAlign="center"
              fontFamily="sans-serif"
              letterSpacing={1}
              _hover={{
                bg: "blue.400",
              }}
            >
              <Text
                fontSize="xl"
                fontFamily="Courier New, monospace"
                fontWeight="bold"
                color="white"
                mr={2}
                mt="-1"
              >
                <AiFillGithub />
              </Text>
              GitHub Link
            </Button>
          </a>
          <a href={webLink} color="white">
            <Button
              fontWeight="bold"
              colorScheme="#FF5F0F"
              color="white"
              textAlign="center"
              fontFamily="sans-serif"
              letterSpacing={1}
              _hover={{
                bg: "purple.700",
              }}
            >
              <Text
                fontSize="xl"
                fontFamily="Courier New, monospace"
                fontWeight="bold"
                color="white"
                mr={1}
                mt="-1"
              >
                <FaInternetExplorer />
              </Text>
              Website Link
            </Button>
          </a>
        </Stack>
      </Stack>
    </Box>
  );
}
