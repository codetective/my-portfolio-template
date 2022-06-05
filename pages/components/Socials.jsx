import { HStack, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import data from "../../data";

function Socials() {
  return (
    <HStack spacing="3">
    {data.linkedIn &&  <IconButton
        variant="flushed"
        size="sm"
        aria-label="linkedin"
        as={Link}
        isExternal
        href={data.linkedIn}
        fontSize={"2xl"}
        icon={<FaLinkedinIn />}
        _hover={{
          background: "rgba(0,0,0,0.5)",
          color: "blue.500",
        }}
        title="LinkedIn"
      />}
    {data.github &&  <IconButton
        variant="flushed"
        as={Link}
        isExternal
        href={data.github}
        aria-label="github"
        size="sm"
        fontSize={"2xl"}
        icon={<FaGithub />}
        _hover={{
          background: "rgba(0,0,0,0.5)",
          color: "blue.500",
        }}
        title="Github"
      />}
 {data.twitter &&     <IconButton
        variant="flushed"
        size="sm"
        aria-label="twitter"
        as={Link}
        isExternal
        href={data.twitter}
        fontSize={"2xl"}
        icon={<FaTwitter />}
        _hover={{
          background: "rgba(0,0,0,0.5)",
          color: "blue.500",
        }}
        title="Twitter"
      />}
     {data.facebook && <IconButton
        variant="flushed"
        size="sm"
        aria-label="facebook"
        as={Link}
        isExternal
        href={data.facebook}
        fontSize={"2xl"}
        icon={<FaFacebook />}
        _hover={{
          background: "rgba(0,0,0,0.5)",
          color: "blue.500",
        }}
        title="Facebook"
      />}
   {data.instagram &&   <IconButton
        variant="flushed"
        size="sm"
        aria-label="instagram"
        as={Link}
        isExternal
        href={data.instagram}
        fontSize={"2xl"}
        icon={<FaInstagram />}
        _hover={{
          background: "rgba(0,0,0,0.5)",
          color: "blue.500",
        }}
        title="Instagram"
      />}
    </HStack>
  );
}

export default Socials;
