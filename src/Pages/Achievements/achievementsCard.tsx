import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface AchievementProps {
  title: string;
  desc: string;
  icon: ReactElement;
}

function AchievementCard({ title, desc, icon, ...rest }: AchievementProps) {
  return (
    <Box
      p={5}
      w={{ base: "100%", md: "50%" }}
      bg="white"
      borderRadius={15}
      {...rest}
    >
      <Stack alignItems="center" direction="column">
        <Stack direction="row">
          {icon}
          <Heading
            textAlign={{ base: "center", md: "left" }}
            fontFamily="sans-serif"
            fontSize="xl"
          >
            {title}
          </Heading>
        </Stack>
        <Text
          color="blue.700"
          fontFamily="sans-serif"
          textAlign="center"
          mt={4}
        >
          {desc}
        </Text>
      </Stack>
    </Box>
  );
}

export default AchievementCard;
