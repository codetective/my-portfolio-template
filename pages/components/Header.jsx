/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  FaChevronDown,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Socials from "./Socials";
import data from "../../data";

function Header() {
  const displayMD = useBreakpointValue({ base: "none", md: "flex" });
  const displaySM = useBreakpointValue({ base: "flex", md: "none" });
  return (
    <Box>
      <Box>
        <HStack
          py="10"
          spacing={4}
          justifyContent="flex-end"
          display={displayMD}
        >
          <Link href="/">Home </Link>
          <Link href="#skills">Skills </Link>
          <Link href="#showcase">Showcase </Link>
          <Link href="#connect">Connect </Link>
        </HStack>
        <HStack
          py="10"
          spacing={4}
          justifyContent="flex-end"
          display={displaySM}
        >
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  // isActive={isOpen}
                  // bg={isOpen ? "black" : "gray.900"}
                  color={isOpen && "gray.500"}
                  as={Button}
                  rightIcon={<FaChevronDown />}
                  colorScheme="dark"
                >
                  {isOpen ? "Close Menu" : "Open Menu"}
                </MenuButton>
                <MenuList bg="#042338" focus>
                  <MenuItem
                    as={Link}
                    href="/"
                    _focus={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                    _hover={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="#skills"
                    _focus={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                    _hover={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Skills
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="#showcase"
                    _focus={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                    _hover={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Showcase
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="#connect"
                    _focus={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                    _hover={{
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    Connect
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Box>
      <SimpleGrid
        py="40px"
        minH="calc(100vh - 100px)"
        columns={[1, 1, 2]}
        spacing={8}
      >
        <Stack
          h={["fit-content", "fit-content", "100%"]}
          alignContent={"center"}
          justify="center"
          spacing="5"
        >
          <Text fontSize="sm"> HELLO THERE!, I'M</Text>
          <Text as="h1" fontSize={["4xl", "5xl"]} fontWeight="bold">
            {data.name}
          </Text>
          <Text fontSize="md" color="gray.400" fontWeight="bold">
          {data.tagline}
          </Text>
          <Button
            rounded="full"
            as={Link}
            href="#connect"
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
            My Resume
          </Button>
          <Socials />
        </Stack>
    {data.image &&    <Stack alignItems={"center"} justify="center">
          <Image
            h={["300px", "400px"]}
            w={["300px", "400px"]}
            src={data.image?data.image : '/default.png'}
            alt="edidiong portrait"
            objectFit={"cover"}
            rounded="full"
          />
        </Stack>}
    {!data.image &&    <Stack alignItems={"center"} justify="center">
          <Image
          display={['none', 'none', 'inline', 'inline']}
            h={["200px", "300px"]}
            w={["200px", "300px"]}
            src={'/code.png'}
            alt="edidiong portrait"
            objectFit={"cover"}
        
          />
        </Stack>}
      </SimpleGrid>
    </Box>
  );
}

export default Header;
