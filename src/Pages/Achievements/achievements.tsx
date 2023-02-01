import { Container, Box, Text, Stack, Icon } from "@chakra-ui/react";
import { FaLaptopCode } from "react-icons/fa";

import { MdSchool, MdOutlineEmojiEvents } from "react-icons/md";
import AchievementsCard from "./achievementsCard";

function Achievements() {
  return (
    <Box w="100%" bg="purple.800">
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
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="white"
            fontSize="3xl"
            textAlign="center"
            pb="4%"
          >
            My Achievements
          </Text>
          <Text
            fontFamily="sans-serif"
            fontWeight="semibold"
            color="white"
            fontSize="3xl"
            textAlign="center"
            pb="4%"
          >
            <MdOutlineEmojiEvents />
          </Text>
        </Stack>
        <Stack w="100%" spacing={12} direction="column">
          <Stack spacing={8} direction={{ base: "column", md: "row" }}>
            <AchievementsCard
              icon={<Icon as={MdSchool} color="blue.500" w={5} h={5} />}
              title="Dean's Award 2020"
              desc="I was awarded with a dean's award for Jan-June semester by Botho University."
            />
            <AchievementsCard
              icon={<Icon as={FaLaptopCode} color="blue.500" w={5} h={5} />}
              title="Intern Lead 2021"
              desc=" During my intership at Africa Code Academy i was appointed as team lead on the project we were working on as interns."
            />
          </Stack>
          <Stack spacing={8} direction={{ base: "column", md: "row" }}>
            <AchievementsCard
              icon={<Icon as={FaLaptopCode} color="blue.500" w={5} h={5} />}
              title="UNESCO African India Hackathon"
              desc="In 2022 i was one of the selected software developers to participat at UNESCO Hackathon representing my Country."
            />
            <AchievementsCard
              icon={<Icon as={MdSchool} color="blue.500" w={5} h={5} />}
              title="Deans's Award 2023"
              desc="I was awarded with a dean's award for June-Nov semester by Botho University."
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Achievements;
