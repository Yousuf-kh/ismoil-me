import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { navLinks } from "../helpers/const";

const Navbar = () => {
  return (
    <Box w={"full"} h={"60px"} bg={"#0B0D17"}>
      <Container maxW={"container.lg"}>
        <Flex align={"center"} h={"60px"} justify={"space-between"}>
          <Flex align={"center"} gap={2} cursor={"pointer"}>
            <Image src="../../images/logo.png" />
            <Text fontSize={"12px"} color={"#ccc"}>
              3 yildan ortiq tajribaga ega <br /> grafik dizayner
            </Text>
          </Flex>

          <Flex align={"center"} gap={"5"}>
            {navLinks.map((c) => (
              <Link
                _hover={{ color: "#60CDF6", textDecor: "underline" }}
                color={"#fff"}
                fontSize={"14px"}
              >
                {c}
              </Link>
            ))}
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
