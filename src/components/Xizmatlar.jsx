import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { xizmatlar } from "../helpers/const";

const Xizmatlar = () => {
  return (
    <Box w={"full"} py={10}>
      <Container maxW={"container.lg"}>
        <Heading
          fontSize={"38px"}
          fontWeight={"700"}
          lineHeight={"42px"}
          textAlign={"center"}
          pb={2}
        >
          Bizning Xizmatlarimiz
        </Heading>
        {xizmatlar.map((c, i) => (
          <Box
            key={i}
            pos={"relative"}
            p={{ base: 10, md: 20 }}
            minW={"full"}
            h={"300px"}
            bg={c.bg}
          >
            <Box pos={"absolute"} w={{ base: "100%", md: "40%" }}>
              <Heading
                fontSize={"24px"}
                fontWeight={"700"}
                lineHeight={"25px"}
                letterSpacing={"0.03em"}
                color={"#fff"}
                pb={2}
              >
                {c.heading}
              </Heading>
              <Text
                fontSize={"16px"}
                fontWeight={"300"}
                lineHeight={"18px"}
                letterSpacing={"0.03em"}
                pb={2}
                color={"#fff"}
              >
                {c.text}
              </Text>
              <Button px={10} bg={"#45CCFF"} color={"#fff"}>
                Buyutma Berish
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Xizmatlar;
