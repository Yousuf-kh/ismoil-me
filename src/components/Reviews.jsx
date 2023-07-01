import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";

import { responsive2, portfolioFirst, caruselImage } from "../helpers/const";

const Reviews = () => {
  return (
    <Box w={"full"} p={"50px"}>
      <Container maxW={"container.lg"}>
        <Heading fontSize={"38px"} fontWeight={"700"}>
          O’quvchilarimning ishlari
        </Heading>
        <Flex gap={5} flexDirection={{ base: "column", md: "row" }}>
          <Box
            p={10}
            boxShadow={"0px 13px 25px -1px rgba(34, 60, 80, 0.2)"}
            h={"300px"}
            mt={10}
            width={{ base: "full", md: "50%" }}
          >
            <Carousel responsive={responsive2}>
              {caruselImage.map((c, i) => (
                <Box>
                  <Image src="/images/logo2.png" />

                  <Text pt={5}>{c.text}</Text>
                  <Flex gap={3} pt={5} align={"center"}>
                    <Box w={"64px"} h={"64px"}>
                      {c.image}
                    </Box>
                    <Box>
                      <Text fontWeight={"700"}>{c.author}</Text>
                      <Text>{c.job}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Carousel>
          </Box>

          <Box width={{ base: "full", md: "50%" }}>
            <Carousel responsive={responsive2}>
              {portfolioFirst.map((c) => c.image)}
            </Carousel>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Reviews;
