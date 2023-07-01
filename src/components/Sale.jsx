import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";

const Sale = () => {
  return (
    <Box
      minH={"326px"}
      w={"full"}
      backgroundImage={"url(/images/bg_10.png)"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      py={"50px"}
    >
      <Container maxW={"container.lg"}>
        <Grid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gap={5}
        >
          <Box pt={9}>
            <Text
              color={"#fff"}
              fontSize={"22px"}
              fontWeight={"700"}
              letterSpacing={"0.01em"}
              lineHeight={"22.5px"}
            >
              Hayit ayyomi munosabati bilan kursni{" "}
              <Box color={"#45CCFF"} as={"span"}>
                10% skidka
              </Box>{" "}
              bilan harid qiling!
            </Text>
            <Text
              pt={3}
              color={"#B8BCC5"}
              fontSize={"20px"}
              lineHeight={"21.5px"}
            >
              Yokida o’z do’stingizni olib keling va <br /> aksiyaga ega boling!
            </Text>
            <Button mt={7} bg={"#45CCFF"} color={"#fff"}>
              RO'YXATDAN O'TING
            </Button>
            <Text mt={4} color={"#B8BCC5"} fontSize={"14px"}>
              Aksiya faqatgina guruhlik darsimizga amal qiladi.
            </Text>
          </Box>
          <Image src="/images/10.png" />
        </Grid>
      </Container>
    </Box>
  );
};

export default Sale;
