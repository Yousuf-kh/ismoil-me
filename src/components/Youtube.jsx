import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { comment } from "../helpers/const";
import { kurslarRasm } from "../helpers/const";

const Youtube = () => {
  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const handleToggle = () => setShow(!show);
  const hadleComment = () => setShowComment(!showComment);

  return (
    <Box w={"full"} py={10}>
      <Container maxW={"container.lg"}>
        <Grid gridTemplateColumns={{ base: "100%", md: "60% 40%" }} gap={5}>
          <Box>
            <Box>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/nYi8dOqIiOk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <Heading
                fontSize={"18px"}
                fontWeight={"600"}
                lineHeight={"21px"}
                letterSpacing={"0.01em"}
                py={5}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Heading>
              <Flex align={"center"} gap={2} mb={5}>
                <Image src="/images/User-Avatar.png" borderRadius={"100%"} />
                <Box>
                  <Text
                    fontSize={"14px"}
                    fontWeight={"400"}
                    lineHeight={"16px"}
                    color={"#161722"}
                  >
                    Ismoil Mahmudjonov
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"400"}
                    lineHeight={"14px"}
                    color={"#AAAAAA"}
                  >
                    Author
                  </Text>
                </Box>
              </Flex>
              <Collapse startingHeight={100} in={show}>
                <Text>
                  Maecenas luctus sapien nisl, eget imperdiet orci placerat ut.
                  Fusce et nulla ut magna lacinia euismod. Integer eget lectus
                  pellentesque, eleifend ligula quis, eleifend sem. Mauris ante
                  sapien, ornare vel lobortis id, egestas nec mauris.
                </Text>
                <Text>
                  Maecenas luctus sapien nisl, eget imperdiet orci placerat ut.
                  Fusce et nulla ut magna lacinia euismod. Integer eget lectus
                  pellentesque, eleifend ligula quis, eleifend sem. Mauris ante
                  sapien, ornare vel lobortis id, egestas nec mauris.
                </Text>
              </Collapse>
              <Button
                bg={"transparent"}
                borderRadius={"20px"}
                border={"1px solid #333"}
                size="sm"
                onClick={handleToggle}
                my={"1rem"}
              >
                {show ? "Yopish" : "Show More"}
              </Button>

              <Box>
                <Flex gap={2}>
                  <Image src="/images/User-Avatar.png" borderRadius={"100%"} />
                  <Input
                    border={"none"}
                    borderBottom={"1px solid #D7D7D7"}
                    borderRadius={"0px"}
                    outline={"none"}
                    placeholder="Kommentariya yozib qoldiring"
                  />
                </Flex>
                <Collapse startingHeight={70} in={showComment}>
                  <Box>
                    {comment.map((c, i) => (
                      <Flex
                        key={i}
                        align={"center"}
                        cursor={"pointer"}
                        gap={2}
                        mt={5}
                      >
                        <Image src={c.img} borderRadius={"100%"} />
                        <Box>
                          <Text
                            fontSize={"12px"}
                            fontWeight={"600"}
                            lineHeight={"13px"}
                            color={"#161722"}
                          >
                            User.Name
                          </Text>
                          <Text
                            fontSize={"12px"}
                            fontWeight={"400"}
                            lineHeight={"13px"}
                            color={"#51555E"}
                          >
                            {c.text}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </Box>
                </Collapse>
                <Button
                  bg={"transparent"}
                  borderBottom={"1px solid #333"}
                  borderRadius={"0px"}
                  size="sm"
                  onClick={hadleComment}
                  my={"1rem"}
                >
                  {showComment ? "Yopish" : "Show More"}
                </Button>
              </Box>
            </Box>
          </Box>
          <Box overflowY={"scroll"} h={"100vh"}>
            {kurslarRasm.map((c, i) => (
              <Flex gap={2} align={"center"} pb={5}>
                <Image src={c.img} />
                <Box>
                  <Heading
                    fontSize={"14px"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    color={"#161722"}
                  >
                    {c.title}
                  </Heading>
                  <Text
                    fontSize={"12px"}
                    fontWeight={"400"}
                    lineHeight={"18px"}
                    color={"#AAAAAA"}
                  >
                    {c.text}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Youtube;
