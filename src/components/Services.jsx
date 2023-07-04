import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <Box
      w={"full"}
      bg={"url(/images/dizayn-bg.png)"}
      minH={"500px"}
      pt={{ base: "30px", md: "100px" }}
    >
      <Container maxW={"container.lg"}>
        <Box w={{ base: "90", md: "50%" }}>
          <Text
            fontSize={{ base: "19px", md: "22px" }}
            fontWeight={"700"}
            lineHeight={"24px"}
            letterSpacing={"0.03em"}
            color={"#fff"}
          >
            Bizning noyob va strategik dizaynlarimiz orqali kompaniyangiz
          </Text>
          <Heading
            fontSize={{ base: "30px", md: "36px" }}
            fontWeight={"700"}
            lineHeight={"40px"}
            letterSpacing={"0.03em"}
            color={"#EF3833"}
            textDecor={"underline"}
            textTransform={"uppercase"}
            pt={5}
          >
            tovar yokida xizmatlarini soting!
          </Heading>
          <Button mt={10} px={10} color={"#fff"} bg={"#45CCFF"}>
            Batafsil
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
