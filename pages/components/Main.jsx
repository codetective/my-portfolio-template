import {
  Box,
  Link,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import data from "../../data";



function Main() {
  return (
    <>
      <Box py="60px" id="skills">
        <HStack spacing="5" alignItems={"center"} mb="15">
          <Box fontSize="3xl" style={{ marginBottom: "6px" }}>
            <FaCaretRight />
          </Box>
          <Text as="h2" fontSize="3xl" fontWeight="bold">
            Skills
          </Text>
        </HStack>
        <SimpleGrid spacing={8} columns={[2, 2, 3, 4]} py="5">
          {data.skillsArray.map((s, i) => (
            <Stack p="4" justify={"center"} align="center" key={i}>
              {" "}
              <Image
                src={s.logo}
                alt={s.name}
                h={["80px", "100px"]}
                w={["80px", "100px"]}
                maxW="100px"
              />{" "}
              <Text
                as="h3"
                fontSize="lg"
                fontWeight={"semibold"}
                textAlign={"center"}
                whiteSpace="nowrap"
              >
                {s.name}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
      <Box py="60px" id="showcase">
        <HStack spacing="5" alignItems={"center"} mb="10">
          <Box fontSize="3xl" style={{ marginBottom: "6px" }}>
            <FaCaretRight />
          </Box>
          <Text as="h2" fontSize="3xl" fontWeight="bold">
            Showcase
          </Text>
        </HStack>
        <Stack spacing="10">
          {data.projects.map((p, i) => {
            return (
              <>
                <SimpleGrid key={i} columns={[1, 1, 2]} spacing={[3, 3, 8]}>
                  <Box
                    rounded="lg"
                    p={[1, 1, 8]}
                    border="1px solid"
                    borderColor={"gray.900"}
                  >
                    <Image src={p.img} alt="alt" />
                  </Box>
                  <Stack spacing="5" p={[1, 1, 8]} justify={"center"}>
                    <Text
                      as="h3"
                      fontSize={["2xl", "2xl", "3xl"]}
                      fontWeight={"semibold"}
                    >
                      {p.name}
                    </Text>
                    <HStack spacing="5">
                      {p.tech.map((t, i) => (
                        <Box
                          key={i}
                          border="1px solid"
                          px="10px"
                          py="1"
                          rounded="lg"
                          borderColor={"teal"}
                        >
                          {t}
                        </Box>
                      ))}
                    </HStack>
                    <Box
                      py="8"
                      fontWeight={"bold"}
                      textDecoration="underline"
                      textUnderlineOffset={"10px"}
                    >
                      <Link href={p.url} isExternal>
                        Visit Site
                      </Link>
                    </Box>
                  </Stack>
                </SimpleGrid>
              </>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}

export default Main;
