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

import { responsive2, portfolioFirst } from "../helpers/const";

const Reviews = () => {
  return (
    <Box w={"full"} p={"50px"}>
      <Container maxW={"container.lg"}>
        <Heading fontSize={"38px"} fontWeight={"700"}>
          O’quvchilarimning ishlari
        </Heading>
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gap={{ base: 0, md: 5 }}
        >
          <Box
            p={10}
            boxShadow={"0px 13px 25px -1px rgba(34, 60, 80, 0.2)"}
            h={"300px"}
            mt={10}
            width={{ base: "200px", md: "570px" }}
          >
            <Carousel responsive={responsive2}>
              <Box>
                <Image src="/images/logo2.png" pb={5} />
                <Text fontSize={{ base: "10px", md: "17px" }} pb={5}>
                  <Link color={"#4D9FEB"}>@mirjalolov_komron</Link> amazing
                  concept. It really brings me joy 💜 Bring a sense of play your
                  software and consider how it impacts the humans using it. Best
                  way to build.
                </Text>
                <Flex justify={"space-between"}>
                  <Flex align={"center"} gap={2}>
                    <Image
                      src="/images/4.jpg"
                      w={{ base: "20px", md: "64px" }}
                      h={{ base: "20px", md: "64px" }}
                      borderRadius={"100%"}
                    />
                    <Box fontSize={{ base: "10px", md: "14px" }}>
                      <Text lineHeight={"14px"}>Komron Mirjalolov</Text>
                      <Text>Dizayner</Text>
                    </Box>
                  </Flex>
                  <Flex align={"center"} gap={2}>
                    <Image src="/images/star.png" />
                    <Image src="/images/star.png" />
                    <Image src="/images/star.png" />
                  </Flex>
                </Flex>
              </Box>

              <Box>
                <Image src="/images/logo2.png" pb={5} />
                <Text fontSize={{ base: "10px", md: "17px" }} pb={5}>
                  <Link color={"#4D9FEB"}>@mirjalolov_komron</Link> amazing
                  concept. It really brings me joy 💜 Bring a sense of play your
                  software and consider how it impacts the humans using it. Best
                  way to build.
                </Text>
                <Flex justify={"space-between"}>
                  <Flex align={"center"} gap={2}>
                    <Image
                      src="/images/4.jpg"
                      w={{ base: "20px", md: "64px" }}
                      h={{ base: "20px", md: "64px" }}
                      borderRadius={"100%"}
                    />
                    <Box>
                      <Text lineHeight={"14px"}>Komron Mirjalolov</Text>
                      <Text>Dizayner</Text>
                    </Box>
                  </Flex>
                  <Flex align={"center"} gap={2}>
                    <Image src="/images/star.png" />
                    <Image src="/images/star.png" />
                    <Image src="/images/star.png" />
                  </Flex>
                </Flex>
              </Box>

              <Box>
                <Image src="/images/logo2.png" pb={5} />
                <Text fontSize={{ base: "10px", md: "17px" }} pb={5}>
                  <Link color={"#4D9FEB"}>@mirjalolov_komron</Link> amazing
                  concept. It really brings me joy 💜 Bring a sense of play your
                  software and consider how it impacts the humans using it. Best
                  way to build.
                </Text>
                <Flex justify={"space-between"}>
                  <Flex align={"center"} gap={2}>
                    <Image
                      src="/images/4.jpg"
                      w={{ base: "20px", md: "64px" }}
                      h={{ base: "20px", md: "64px" }}
                      borderRadius={"100%"}
                    />
                    <Box>
                      <Text lineHeight={"14px"}>Komron Mirjalolov</Text>
                      <Text>Dizayner</Text>
                    </Box>
                  </Flex>
                  <Flex align={"center"} gap={2}>
                    <Image src="/images/star.png" />
                    <Image src="/images/star.png" />
                    <Image src="/images/star.png" />
                  </Flex>
                </Flex>
              </Box>
            </Carousel>
          </Box>

          <Carousel responsive={responsive2}>
            {portfolioFirst.map((c) => c.image)}
          </Carousel>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
