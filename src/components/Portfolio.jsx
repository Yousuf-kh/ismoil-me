import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { responsive, portfolioFirst } from "../helpers/const";

// Import Multi Carusel
import Carousel from "react-multi-carousel";

const Portfolio = () => {
  return (
    <Box w={"full"} bg={"#fff"} p={"50px"}>
      <Container maxW={"container.lg"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          <Box w={"70%"}>
            <Heading
              color={"#242935"}
              fontSize={"24px"}
              letterSpacing={"1%"}
              fontWeight={"700"}
              pb={3}
            >
              Mening ishlarim
            </Heading>
            <Text fontSize={"18px"} color={"#51555E"} pb={3}>
              Grafik dizayn san'atini men bilan birga o'rganing!
            </Text>
            <Flex align={"center"} gap={5}>
              <Button bg={"#53C2EC"} color={"#fff"} px={"40px"}>
                O'RGANISH
              </Button>
              <Text fontSize={"12px"} color={"#A1A6B1"}>
                Xuddi shu tarzda dizaynlar qilishni o'rganish uchun tugmani
                bosing!
              </Text>
            </Flex>
            <Center py={"20px"}>
              <Image src="../../images/vector.png" />
            </Center>
          </Box>

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3500}
            infinite={true}
          >
            {portfolioFirst.map((c) => (
              <Box p={1}>{c.image}</Box>
            ))}
          </Carousel>
        </Grid>

        <Flex gap={5} pt={"50px"}>
          <Box>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fM8PCBJQ8hg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </Box>

          <Box>
            <Heading fontSize={"35px"} color={"#242935"} pb={3}>
              KURS HAQIDA BATAFSIL
            </Heading>
            <Text lineHeight={"19px"} fontSize={"14px"}>
              Ushbu onlayn dizayn kursi sizga dizaynning batcha qirralaridan
              tortib mijozlaringizni e’tirozlari bilan maksimal darajada ishlash
              kabi muhim bilimlarni o'rganishga yordam beradi. <br />
              <br /> Grafik dizaynni o'rganishni boshlamoqchimisiz yoki grafik
              dizayn mahoratingizni keyingi bosqichga ko'tarmoqchimisiz, siz
              to'g'ri joydasiz.
              <br />
              <br /> Har bir kurs sizni dizayn kontseptsiyasini (dizayn
              yasalishidan bo’lgan maqsad) o'zlashtirishingiz uchun zarur
              bo'lgan barcha tafsilotlar bilan tanishtiradi.
            </Text>
            <Box>O'quvchilarimizning ishlari</Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Portfolio;
