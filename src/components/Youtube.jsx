import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { kurslarRasm } from "../helpers/const";

const Youtube = () => {
  return (
    <Box w={"full"} pt={10}>
      <Container maxW={"container.lg"}>
        <Grid gridTemplateColumns={{ base: "100%", md: "60% 40%" }} gap={5}>
          <Box>
            <Box>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/nYi8dOqIiOk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <Heading
                fontSize={"18px"}
                fontWeight={"600"}
                lineHeight={"21px"}
                letterSpacing={"0.01em"}
                py={5}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Heading>
              <Flex>
                <Image src="/images/User-Avatar.png" borderRadius={"100%"} />
                <Box></Box>
              </Flex>
            </Box>
          </Box>
          <Box overflowY={"scroll"} h={"100vh"}>
            {kurslarRasm.map((c, i) => (
              <Flex gap={2} align={"center"} pb={5}>
                <Image src={c.img} />
                <Box>
                  <Heading
                    fontSize={"14px"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    color={"#161722"}
                  >
                    {c.title}
                  </Heading>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"400"}
                    lineHeight={"18px"}
                    color={"#AAAAAA"}
                  >
                    {c.text}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Youtube;
