import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AboutPage = () => {
  return (
    <Box h={"500px"} w={"full"} backgroundImage={"url(/images/about-bg.png)"}>
      <Container maxW={"container.lg"}>
        <Box pt={{ base: "20px", md: "150px" }} w={{ base: "full", md: "60%" }}>
          <Heading
            fontSize={"38px"}
            fontWeight={"700"}
            lineHeight={"40px"}
            letterSpacing={"0.03em"}
            color={"#fff"}
          >
            Men -{" "}
            <Box as={"span"} color={"#EF3833"}>
              Ismoil Mahmudjonov
            </Box>
            ,
          </Heading>
          <Text
            color={"#fff"}
            fontSize={"18px"}
            fontWeight={"300"}
            lineHeight={"25px"}
            letteSpacing={"0.03em"}
            pt={5}
            w={"90%"}
          >
            grafik dizayn sohasida 3 yillik tajribaga ega mutaxassisman. Hozirgi
            kunga qadar 70dan ortiq loyihalar bilan muvaffaqiyatli ish
            faoliyatini olib borganman. Men o'z ishlarimda asosan "Photoshop",
            "Illustrator", "CorelDraw" dasturlaridan foydalanaman!
          </Text>
          <Button mt={8} bg={"#45CCFF"} color={"#fff"} px={"20px"} py={"10px"}>
            PORTFOLIO
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
