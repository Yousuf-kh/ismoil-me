import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Grid,
  // useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";

import { company } from "../helpers/const";

const Company = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box w={"full"}>
      <Container maxW={"container.lg"}>
        <Collapse startingHeight={360} in={show}>
          <Grid
            gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}
            gap={6}
            py={10}
            pb={20}
          >
            {company.map((c, i) => c.image)}
          </Grid>
        </Collapse>
        <Flex justify={"flex-end"}>
          <Button
            bg={"transparent"}
            borderRadius={"20px"}
            border={"1px solid #333"}
            size="sm"
            onClick={handleToggle}
            my={"1rem"}
          >
            {show ? "Yopish" : "Yana"}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Company;
