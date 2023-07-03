import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  // Link,
  Text,
} from "@chakra-ui/react";

import { navLinks } from "../helpers/const";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box w={"full"} bg={"#0B0D17"} h={"90px"}>
      <Container maxW={"container.lg"}>
        <Flex
          align={"center"}
          h={"90px"}
          justify={{ base: "center", md: "space-between" }}
        >
          <Link to="/">
            <Flex
              display={{ base: "none", md: "block" }}
              align={"center"}
              gap={2}
              cursor={"pointer"}
            >
              <Image src="/images/logo.png" />
            </Flex>
          </Link>

          <Flex align={"center"} gap={"5"}>
            {navLinks.map((c) => (
              <Box key={c.text} display={{ base: "none", md: "flex" }}>
                <Link to={c.page}>
                  <Text
                    _hover={{ color: "#60CDF6", textDecor: "underline" }}
                    color={"#fff"}
                    fontSize={"14px"}
                  >
                    {c.text}
                  </Text>
                </Link>
              </Box>
            ))}

            <Flex gap={2}>
              <Image src="/images/insta.png" />
              <Image src="/images/telegram.png" />
              <Image src="/images/youtube.png" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
