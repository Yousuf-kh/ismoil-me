import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box w={"full"} minH={{ base: "77.2vh", md: "77.5vh" }}>
      <Box bg={"#EFEFEF"}>
        <Container maxW={"container.lg"} h={"25vh"}>
          <Heading
            color={"#242935"}
            fontSize={"38px"}
            fontWeight={"700"}
            lineHeight={"42px"}
            letterSpacing={"0.01em"}
            pt={"5"}
            pb={5}
          >
            Bog’lanish
          </Heading>
          <Text
            color={"#242935"}
            fontSize={"16px"}
            fontWeight={"400"}
            lineHeight={"18px"}
            letterSpacing={"0.01em"}
          >
            Platformaga oid savol va takliflaringizni yozib qoldiring.
          </Text>
        </Container>
      </Box>

      <Container maxW={"container.lg"}>
        <Box
          pos={"relative"}
          top={"-10"}
          bg={"#fff"}
          p={{ base: 5, md: 10 }}
          boxShadow={"0px 13px 25px -1px rgba(34, 60, 80, 0.2)"}
          borderRadius={"20px"}
        >
          <Grid
            gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
            gap={5}
          >
            <Box>
              <FormLabel>
                <Text color={"#344054"} fontSize={"14px"}>
                  FIO*
                </Text>
                <Input type="text" placeholder="Ismingiz" mb={5} />
              </FormLabel>
              <FormLabel>
                <Text color={"#344054"} fontSize={"14px"}>
                  Email (telefon raqamingiz)*
                </Text>
                <Input type="email" placeholder="Email" />
              </FormLabel>
            </Box>
            <FormLabel>
              <Text color={"#344054"} fontSize={"14px"}>
                Taklifingiz
              </Text>
              <Textarea />
            </FormLabel>
          </Grid>
          <Box pt={10} textAlign={"center"}>
            <Button bg={"#45CCFF"} px={10} color={"#fff"}>
              YUBORISH
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
