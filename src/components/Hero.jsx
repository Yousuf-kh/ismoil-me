import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      w={"full"}
      backgroundImage={"url(/images/bg.png)"}
      minH={"500px"}
      backgroundPosition={{ base: "left", md: "center" }}
    >
      <Container maxW={"container.lg"}>
        <Box
          pt={{ base: "50px", md: "100px" }}
          w={{ base: "full", md: "500px" }}
          pos={"relative"}
        >
          <Flex align={"flex-end"} pos={"relative"}>
            <Heading
              fontSize={{ base: "30px", md: "38px" }}
              fontWeight={"700"}
              lineHeight={{ base: "35px", md: "40px" }}
              letterSpacing={"0.03em"}
              textAlign={"left"}
              color={"#fff"}
            >
              Grafik Dizaynerlik <br /> kurslari
            </Heading>
            <Button
              px={"30px"}
              bg={"#EF3833"}
              color={"#fff"}
              fontWeight={"300"}
              size={"sm"}
              pos={"absolute"}
              left={"160px"}
            >
              ONLINE
            </Button>
          </Flex>
          <Text
            color={"#fff"}
            fontSize={{ base: "18px", md: "22px" }}
            fontWeight={"300"}
            lineHeight={"24px"}
            letterSpacing={"0.03em"}
            pt={5}
          >
            IT kompaniyalarida talab qilinadigan kasbni egallang va logotiplar,
            ijtimoiy tarmoqlar uchun postlar va boshqa ko'p elementlarni
            o'rganing. Yoki o'z skillingizni oshiring!
          </Text>
          <Button bg={"#45CCFF"} color={"#fff"} fontWeight={"300"} mt={5}>
            BATAFSIL MA'LUMOT
          </Button>
          <Flex
            pt={{ base: 10, md: 0 }}
            pos={"absolute"}
            right={"0"}
            align={"center"}
          >
            <Text textAlign={"end"} color={"#fff"}>
              <Box as="span" fontWeight={"700"}>
                Ismoil
              </Box>{" "}
              Mahmudjonov <br />
              <Box as="span" color={"#45CCFF"}>
                Dizaner
              </Box>
            </Text>
            <Image src="/images/circle.png" />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
