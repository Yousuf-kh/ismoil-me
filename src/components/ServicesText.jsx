import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ServicesText = () => {
  return (
    <Box w={"full"} bg={"#F5F5F5"} py={"50px"}>
      <Container maxW={"container.lg"}>
        <Flex
          align={"center"}
          flexDir={{ base: "column", md: "row" }}
          justify={{ base: "", md: "space-between" }}
        >
          <Image src="/images/logo3.png" />
          <Box w={{ base: "full", md: "65%" }}>
            <Heading
              fontSize={"30px"}
              lineHeight={"40px"}
              pt={{ base: 10, md: "" }}
            >
              Biz ko'chmas mulk va biznes uchun dizayn, ijodkorlik va savdoni
              yaratamiz
            </Heading>
            <Text
              pt={2}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"26px"}
            >
              Biz 2019 yildan beri yuqori sifatli dizayn yaratamiz. Bizning
              ishimizda biz kompaniyangiz uchun qulay va tejamkor mahsulotni
              ishlab chiqish uchun biznes maqsadlari va tadqiqotlariga
              tayanamiz.
              <br />
              <br /> Mutaxassislarimiz sizning so'rovlaringizga bir zumda javob
              berishadi, tezda loyihaga kirishadilar va har doim eng yaxshi
              echimni topadilar va savdolaringizni oshirish uchun marketing
              chiplaridan foydalanadilar.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesText;
