import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { whois } from "../helpers/const";

const WhoIs = () => {
  return (
    <Box w={"full"} py={"50px"} bg={"#F5F5F5"}>
      <Container maxW={"container.lg"}>
        <Heading color={"#242935"} fontSize={"38px"} textAlign={"center"}>
          Kimlar uchun
        </Heading>
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gridGap={6}
          pt={10}
        >
          {whois.map((c, i) => (
            <Flex key={i} gap={5} align={"center"}>
              <Image src="/images/Subtract.png" />
              <Text fontSize={"16px"} fontWeight={"700"} lineHeight={"19px"}>
                {c.text}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Text textAlign={"center"} pt={10} color={"#51555E"} fontSize={"14px"}>
          Digital-dizayn asoslari bilan tanishing va kasbni muvaffaqiyatli
          boshlash uchun zarur bo'lgan asosiy vazifalarni qanday bajarishni
          o'rganing
        </Text>
      </Container>
    </Box>
  );
};

export default WhoIs;
