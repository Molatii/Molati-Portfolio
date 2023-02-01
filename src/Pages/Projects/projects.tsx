import { Container, Stack, Box, Text } from "@chakra-ui/react";
import { BsCode } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import ProjectsCard from "./projectscard";
import imgOne from "../../images/s.png";
import imgtwo from "../../images/ss.png";

function Projects() {
  return (
    <Box w="100%" bg="#FFB638" alignItems="center">
      <Container maxW="5xl" pb="5%">
        <Stack
          pt="6%"
          pb="2%"
          spacing="1"
          direction="row"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="3xl"
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="gray.700"
          >
            <BsCode />
          </Text>
          <Text
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="gray.700"
            fontSize="3xl"
            textAlign="center"
          >
            Look at my recent projects
          </Text>
          <Text
            fontSize="3xl"
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="gray.700"
          >
            <IoCodeSlashOutline />
          </Text>
        </Stack>
        <Stack
          pt="4%"
          justifyContent="center"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
        >
          <ProjectsCard
            title="LS~Gim Hub"
            picture={imgOne}
            desc="Lesotho Gim membership"
            webLink="#"
            gitHubLink="#"
          />
          <ProjectsCard
            title="FireSMS"
            picture={imgtwo}
            desc="Internship SMS sending Platform"
            webLink="#"
            gitHubLink="#"
          />
          <ProjectsCard
            title="A~Academy"
            picture={imgOne}
            desc="School Management Platfrom"
            webLink="#"
            gitHubLink="#"
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default Projects;
