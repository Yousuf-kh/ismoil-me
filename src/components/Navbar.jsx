import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { navLinks } from "../helpers/const";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box w={"full"} h={"60px"} bg={"#0B0D17"}>
      <Container maxW={"container.lg"}>
        <Flex align={"center"} h={"60px"} justify={"space-between"}>
          <Link to="/">
            <Flex align={"center"} gap={2} cursor={"pointer"}>
              <Image src="/images/logo.png" />
              <Text
                fontSize={"12px"}
                color={"#ccc"}
                display={{ base: "none", md: "block" }}
              >
                3 yildan ortiq tajribaga ega <br /> grafik dizayner
              </Text>
            </Flex>
          </Link>

          <Flex align={"center"} gap={"5"}>
            {navLinks.map((c, i) => (
              <Link key={c.text} to={c.page}>
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

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <HamburgerIcon w={"24px"} h={"24px"} color={"#fff"} />
                }
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                display={{ base: "block", md: "none" }}
              ></MenuButton>
              <MenuList>
                {navLinks.map((c, i) => (
                  <Link key={c.text} to={c.page}>
                    <Text
                      p={2}
                      _hover={{ color: "#60CDF6", textDecor: "underline" }}
                      color={"#333"}
                      fontSize={"14px"}
                    >
                      {c.text}
                    </Text>
                  </Link>
                ))}
              </MenuList>
            </Menu>

            <Link to="/kurslar">
              <Button
                bg={"#31333D"}
                color={"#fff"}
                w={"70px"}
                borderRadius={"20px"}
                size={"sm"}
              >
                Kirish
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
