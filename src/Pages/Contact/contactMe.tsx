import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { IoIosMailUnread } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import ContactUsimg from "../../images/svg images/calling.svg";
import ContactCard from "./contactCard";
import bgCover from "../../images/b.jpg";

export default function ContactMe() {
  return (
    <Box
      w="100%"
      style={{ backgroundImage: `url(${bgCover})` }}
      backgroundSize={{ base: "cover", md: "200%" }}
      backgroundRepeat="no-repeat"
      alignItems="center"
    >
      <Container maxW="5xl" py={12} pb={{ base: "10%", md: "7%" }} pt="6%">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Stack direction="row">
              <Heading
                fontFamily="sans-serif"
                fontWeight="semibold"
                color="white"
                fontSize="3xl"
                pb="2%"
              >
                Get In Touch
              </Heading>
              <Text
                fontSize="2xl"
                fontFamily="Courier New, monospace"
                fontWeight="bold"
                color="white"
                pt="1.5%"
              >
                <FaLaptopCode />
              </Text>
            </Stack>
            <Stack
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              rounded="md"
              direction="row"
              spacing={3}
              w={{ base: "25%", md: "20%" }}
            >
              <a href="https://ls.linkedin.com/in/paballo-molati-075313220">
                <Text color="blue.500">
                  <BsLinkedin />
                </Text>
              </a>
              <a href="https://twitter.com/EricMolati">
                <Text color="blue.500">
                  <BsTwitter />
                </Text>
              </a>
              <a href="https://web.facebook.com/paballo.maloti">
                <Text color="blue.500">
                  <BsFacebook />
                </Text>
              </a>
            </Stack>
            <Text
              color="white"
              fontFamily="sans-serif"
              pb="2%"
              pt="2%"
              fontSize="lg"
            >
              Contact me, I am eager to apply my skills and knowledge to a
              challenging and rewarding role in the industry.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <ContactCard
                icon={
                  <Icon as={IoIosMailUnread} color="blue.500" w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text="Molatipaballo@gmail.com"
              />
              <ContactCard
                icon={
                  <Icon
                    as={BsFillTelephoneForwardFill}
                    color="blue.500"
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text="+266 59911982"
              />
              <ContactCard
                icon={<Icon as={MdLocationPin} color="blue.500" w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text="Maseru,Lesotho"
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded="md"
              color="purple.800"
              alt="Contact Us image"
              src={ContactUsimg}
              objectFit="cover"
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
