import { Flex, Text, Stack } from "@chakra-ui/react";

import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon: ReactElement;
}

export default function ContactCard({ text, icon, iconBg }: FeatureProps) {
  return (
    <Stack direction="row" align="center">
      <Flex
        w={8}
        h={8}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text color="white" fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
}
