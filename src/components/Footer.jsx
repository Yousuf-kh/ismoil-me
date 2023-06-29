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

const Footer = () => {
  return (
    <Box w={"full"} bg={"#0B0D17"} h={"90px"}>
      <Container maxW={"container.lg"}>
        <Flex align={"center"} h={"90px"} justify={"space-between"}>
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

            <Flex gap={2}>
              <Image src="../../images/insta.png" />
              <Image src="../../images/telegram.png" />
              <Image src="../../images/youtube.png" />
            </Flex>

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

export default Footer;
