import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const Course = () => {
  return (
    <Box w={"full"} bg={"#F5F5F5"} p={"50px"}>
      <Container maxW={"container.lg"}>
        <Heading textAlign={"center"} pb={10}>
          Kurslar
        </Heading>
        <Flex>
          <Image src="../../images/kurs-1.png" />
          <Flex bg={"#fff"} gap={5} borderRadius={"0 20px 20px 0"}>
            <Box w={"45%"} mt={10} ml={5}>
              <Text color={"#475467"} fontWeight={"600"} fontSize={"16px"}>
                Muallif:
                <br /> Ismoil Mahmudjonov
              </Text>
              <Flex gap={2} pt={2}>
                <Flex>
                  <Image src="../../images/play.png" />
                  <Text color={"#828282"}>15 darslik</Text>
                </Flex>
                <Flex>
                  <Image src="../../images/history.png" />
                  <Text color={"#828282"}>8 soat 59 daq</Text>
                </Flex>
              </Flex>
              <Text pt={3} color={"#828282"}>
                Darsliklar faqatgina video orqali yetkazib beriladi.
              </Text>
              <Flex
                align={"center"}
                border={"1px solid #777"}
                mt={4}
                borderRadius={"20px"}
                justify={"space-between"}
                p={"2px 10px"}
                w={"123px"}
              >
                <Link bg={"none"}>Batafsil</Link>
                <Image src="../../images/u_arrow-right.png" />
              </Flex>
            </Box>
            {/*  */}
            <Box
              bg={"#F1F1F1"}
              w={"60%"}
              h={"96px"}
              p={2}
              mt={10}
              borderRadius={"20px 0 0 20px"}
            >
              <Flex align={"center"} h={"76px"} gap={5}>
                <Heading>$50</Heading>
                <Text lineHeight={"18px"} fontWeight={"700"}>
                  USD <br />{" "}
                  <Box as={"span"} fontWeight={"400"}>
                    To’liq kusr narxi
                  </Box>{" "}
                </Text>
              </Flex>
              <Button bg={"#53C2EC"} color={"#fff"} mt={"60px"}>
                SOTIB OLISH
              </Button>
            </Box>
          </Flex>
        </Flex>
        {/*  */}
        <Flex pt={10}>
          <Image src="../../images/kurs-2.png" />
          <Flex bg={"#fff"} gap={5} borderRadius={"0 20px 20px 0"}>
            <Box w={"45%"} mt={10} ml={5}>
              <Text color={"#475467"} fontWeight={"600"} fontSize={"16px"}>
                Muallif:
                <br /> Ismoil Mahmudjonov
              </Text>
              <Flex gap={2} pt={2}>
                <Flex>
                  <Image src="../../images/play.png" />
                  <Text color={"#828282"}>15 darslik</Text>
                </Flex>
                <Flex>
                  <Image src="../../images/history.png" />
                  <Text color={"#828282"}>8 soat 59 daq</Text>
                </Flex>
              </Flex>
              <Text pt={3} color={"#828282"}>
                Darsliklar faqatgina video orqali yetkazib beriladi.
              </Text>
              <Flex
                align={"center"}
                border={"1px solid #777"}
                mt={4}
                borderRadius={"20px"}
                justify={"space-between"}
                p={"2px 10px"}
                w={"123px"}
              >
                <Link bg={"none"}>Batafsil</Link>
                <Image src="../../images/u_arrow-right.png" />
              </Flex>
            </Box>
            {/*  */}
            <Box
              bg={"#F1F1F1"}
              w={"60%"}
              h={"96px"}
              p={2}
              mt={10}
              borderRadius={"20px 0 0 20px"}
            >
              <Flex align={"center"} h={"76px"} gap={5}>
                <Heading>$100</Heading>
                <Text lineHeight={"18px"} fontWeight={"700"}>
                  USD <br />{" "}
                  <Box as={"span"} fontWeight={"400"}>
                    To’liq kusr narxi
                  </Box>{" "}
                </Text>
              </Flex>
              <Button bg={"#53C2EC"} color={"#fff"} mt={"60px"}>
                SOTIB OLISH
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Course;
