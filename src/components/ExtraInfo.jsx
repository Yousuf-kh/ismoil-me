import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { portfolioNumbers } from "../helpers/const";

export { portfolioNumbers } from "../helpers/const";

const ExtraInfo = () => {
  return (
    <Box w={"full"} bg={"#F5F5F5"} minH={"368px"}>
      <Container maxW={"container.lg"}>
        <Heading
          fontSize={{ base: "30px", md: "48px" }}
          fontWeight={"700"}
          lineHeight={"64px"}
          textAlign={"center"}
          pt={10}
          color={"#242935"}
        >
          Muhimi haqida bir oz
        </Heading>
        <Text
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"32px"}
          textAlign={"center"}
          color={"#242935"}
        >
          Dizayn sohasidagi yutuqlarim raqamlarda
        </Text>
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
          gap={5}
          pt={{ base: 5, md: 10 }}
        >
          {portfolioNumbers.map((c, i) => (
            <Box
              borderRight={{ base: "none", md: "1px solid #333" }}
              borderLeft={{ base: "none", md: i == 0 ? "1px solid #333" : "" }}
              key={i}
            >
              <Heading
                fontSize={"48px"}
                fontWeight={"700"}
                lineHeight={"64px"}
                textAlign={"center"}
                color={"#242935"}
              >
                {c.heading}
              </Heading>
              <Text
                fontSize={"18px"}
                fontWeight={"400"}
                lineHeight={"32px"}
                textAlign={"center"}
                color={"#242935"}
              >
                {c.text}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExtraInfo;
