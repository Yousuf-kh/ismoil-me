import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { textAbout } from "../helpers/const";

export { textAbout } from "../helpers/const";

const OnlineCourse = () => {
  return (
    <Box
      minH={"450px"}
      w={"full"}
      backgroundImage={"url(../../images/kurs-bg.png)"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={{ base: "left", md: "center" }}
    >
      <Container maxW={"container.lg"}>
        <Box pt={{ base: "20px", md: "70px" }} w={{ base: "full", md: "50%" }}>
          <Flex gap={2} align={"center"}>
            <Heading
              fontSize={{ base: "30px", md: "38px" }}
              fontWeight={"700"}
              lineHeight={{ base: "35px", md: "40px" }}
              letterSpacing={"0.03em"}
              textAlign={"left"}
              color={"#fff"}
            >
              O'quv kursi
            </Heading>
            <Button
              px={"30px"}
              bg={"#EF3833"}
              color={"#fff"}
              fontWeight={"300"}
              size={"sm"}
            >
              ONLINE
            </Button>
          </Flex>
          <Text
            fontSize={"30px"}
            fontWeight={"300"}
            lineHeight={"31px"}
            letterSpacing={"0.03em"}
            color={"#fff"}
            pt={5}
          >
            Adobe Photoshop, Illustrator va Corel Draw dasturlarida kompyuter
            grafikasi
          </Text>
          <Grid
            pt={10}
            gap={6}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            {textAbout.map((c, i) => (
              <Flex gap={2} align={"center"} key={i}>
                <Image src="../../images/Subtract.png" />
                <Text color={"#D9D9D9"} fontSize={"18px"}>
                  {c}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OnlineCourse;
