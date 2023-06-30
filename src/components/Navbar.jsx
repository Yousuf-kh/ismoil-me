import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

import { navLinks } from "../helpers/const";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box w={"full"} h={"60px"} bg={"#0B0D17"}>
      <Container maxW={"container.lg"}>
        <Flex align={"center"} h={"60px"} justify={"space-between"}>
          <Flex align={"center"} gap={2} cursor={"pointer"}>
            <Image src="../../images/logo.png" />
            <Text
              fontSize={"12px"}
              color={"#ccc"}
              display={{ base: "none", md: "block" }}
            >
              3 yildan ortiq tajribaga ega <br /> grafik dizayner
            </Text>
          </Flex>

          <Flex align={"center"} gap={"5"}>
            {navLinks.map((c) => (
              <Link to={c.page}>
                <Text
                  _hover={{ color: "#60CDF6", textDecor: "underline" }}
                  color={"#fff"}
                  fontSize={"14px"}
                  display={{ base: "none", md: "block" }}
                >
                  {c.text}
                </Text>
              </Link>
            ))}
            <HamburgerIcon
              color={"white"}
              cursor={"pointer"}
              w={"24px"}
              h={"24px"}
              display={{ base: "block", md: "none" }}
            />
            <Button
              bg={"#31333D"}
              color={"#fff"}
              w={"70px"}
              borderRadius={"20px"}
              size={"sm"}
            >
              Kirish
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
