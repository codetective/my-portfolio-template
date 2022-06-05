import {
  Box,
  Button,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FaCaretRight,
  FaEnvelopeOpen,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPortrait,
  FaTwitter,
} from "react-icons/fa";
import data from "../../data";
import Socials from "./Socials";

function Footer() {
  return (
    <>
      <Stack
        id="connect"
        py="40px"
        borderTop={"1px solid"}
        borderColor="gray.800"
        spacing="8"
        minH="100px"
      >
        <HStack spacing="5" alignItems={"center"} mb="4">
          <Box fontSize="3xl" style={{ marginBottom: "6px" }}>
            <FaCaretRight />
          </Box>
          <Text as="h2" fontSize="3xl" fontWeight="bold">
            Get in touch!
          </Text>
        </HStack>
        <SimpleGrid columns={[1, 1, 2]} spacing="8">
          <Stack spacing="8">
            <Stack>
              <HStack spacing="3" alignItems={"center"}>
                <Box fontSize="md" style={{ marginBottom: "6px" }}>
                  <FaEnvelopeOpen />
                </Box>
                <Text fontWeight="semibold" letterSpacing={"1px"}>
                  Email :
                </Text>
              </HStack>
              <Link
                textDecoration="underline"
                textUnderlineOffset={"10px"}
                href={"mailto:"+data.email}
              >
                {data.email}
              </Link>
            </Stack>

            {/*  */}
            <Stack>
              <HStack spacing="3" alignItems={"center"}>
                <Box fontSize="md" style={{ marginBottom: "6px" }}>
                  <FaPhoneAlt />
                </Box>
                <Text fontWeight="semibold" letterSpacing={"1px"}>
                  Phone :
                </Text>
              </HStack>
              <Link
                textDecoration="underline"
                textUnderlineOffset={"10px"}
                href={"tel:" +data.phone.split(' ').join('')}
              >
                {data.phone}
              </Link>
            </Stack>
            {/*   */}
          </Stack>
          <Stack spacing="8">
            <Stack>
              <HStack spacing="3" alignItems={"center"}>
                <Box fontSize="md" style={{ marginBottom: "6px" }}>
                  <FaPortrait />
                </Box>
                <Text fontWeight="semibold" letterSpacing={"1px"}>
                  Resume :
                </Text>
              </HStack>
              <Button
                rounded="full"
                as={Link}
                href={data.resumeLink}
                bg="#042338"
                color="white"
                alignSelf={"self-start"}
                _focus={{
                  background: "rgba(0,0,0,0.5)",
                }}
                _hover={{
                  background: "rgba(0,0,0,0.5)",
                }}
                px="5"
              >
                Download
              </Button>
            </Stack>
            <Socials />
          </Stack>
        </SimpleGrid>
      </Stack>
      <Text
        borderTop={"1px solid"}
        borderColor="gray.800"
        color="gray.500"
        textAlign="center"
        py="3"
      >
        {" "}
        © {new Date().getFullYear() + " "} {data.name}
      </Text>
    </>
  );
}

export default Footer;
