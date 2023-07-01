import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";

const Lessons = () => {
  return (
    <Box w={"full"} p={"50px"}>
      <Heading
        textAlign={"center"}
        fontSize={{ base: "25px", md: "38px" }}
        color={"#242935"}
      >
        Kursimzada siz quyidagilarni o’rganishingiz mumkin
      </Heading>
      <Image src="/images/bg_3.png" />
      <Box textAlign={"center"} pt={5}>
        <Button size={{ base: "sm", md: "md" }} bg={"#53C2EC"} color={"#fff"}>
          SINAB KO'RISH
        </Button>
      </Box>
    </Box>
  );
};

export default Lessons;
