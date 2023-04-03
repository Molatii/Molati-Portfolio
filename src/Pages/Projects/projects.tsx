import { Container, Stack, Box, Text } from "@chakra-ui/react";
import { BsCode } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import ProjectsCard from "./projectscard";
import imgOne from "../../images/tube.png";
import imgtwo from "../../images/firesms.png";
import img3 from "../../images/academy.png";

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
            title="M-tube"
            picture={imgOne}
            desc="Youtube clone using Rapid API"
            webLink="https://m-tube2023.netlify.app/"
            gitHubLink="https://github.com/Molatii/afro-tube"
          />
          <ProjectsCard
            title="FireSMS"
            picture={imgtwo}
            desc="Internship SMS sending Platform"
            webLink="https://aca-firesms.netlify.app/"
            gitHubLink="https://github.com/Molatii/FireSMS_2022-Frontend-Project"
          />
          <ProjectsCard
            title="Academy site"
            picture={img3}
            desc="School Management Platform"
            webLink="https://ls-academy.netlify.app/"
            gitHubLink="https://github.com/Molatii/school-system"
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default Projects;
