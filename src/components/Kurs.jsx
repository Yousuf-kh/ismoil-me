import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { kurses } from "../helpers/const";

const Kurs = () => {
  return (
    <Box
      w={"full"}
      backgroundImage={"url(/images/bg_2.png)"}
      minH={"556px"}
      backgroundSize={"cover"}
      py={"50px"}
    >
      <Container maxW={"container.lg"}>
        <Heading
          color={"#fff"}
          fontSize={"38px"}
          fontWeight={"700"}
          lineHeight={"42px"}
          letterSpacing={"0.01em"}
        >
          Kursning asosiy <br /> afzalliklari
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(4, 1fr)" }}
          pt={5}
          gap={6}
        >
          {kurses.map((c, i) => (
            <Box key={i} pos={"relative"}>
              <Heading
                fontSize={"120px"}
                fontWeight={"700"}
                lineHeight={"132px"}
                letterSpacing={"0.01em"}
                color={"#fff"}
              >
                {c.num}
              </Heading>
              <Text
                pt={"4"}
                fontSize={"18px"}
                fontWeight={"700"}
                lineHeight={"20px"}
                color={"#D9D9D9"}
              >
                {c.title}
              </Text>
              <Text pt={"3"} fontSize={"15px"} color={"#D9D9D9"}>
                {c.text}
              </Text>
              <Image
                src={i == 1 ? "/images/blue-star.png" : "/images/red-star.png"}
                pos={"absolute"}
                top={"5"}
                right={{ base: "0", md: "90" }}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Kurs;
