import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";

import Carousel from "react-multi-carousel";

import { responsive2, portfolioImages } from "../helpers/const";

const Portfolio1 = () => {
  return (
    <Box w={"full"}>
      <Container maxW={"container.lg"}>
        <Grid gap={6} gridTemplateColumns={"repeat(2,1fr)"} py={10}>
          <Heading
            fontSize={"30px"}
            fontWeight={"700"}
            lineHeight={"32px"}
            letterSpacing={"0.01em"}
            color={"#242935"}
          >
            Mening shu vaqt mobaynida qilgan dizaynlarim
          </Heading>
          <Carousel responsive={responsive2}>
            {portfolioImages.map((c) => (
              <Center>{c.image}</Center>
            ))}
          </Carousel>
        </Grid>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={5}>
          <Image src="/images/in-brain-post-1.png" />
          <Image src="/images/in-brain-post-2.png" />
          <Image src="/images/in-brain-post-3.png" />
        </Grid>
        <Center py={10}>
          <Button bg={"#45CCFF"} color={"#fff"} px={10}>
            Oldinga borish
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default Portfolio1;
