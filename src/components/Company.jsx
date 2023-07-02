import { Box, Button, Collapse, Container, Grid } from "@chakra-ui/react";

import { company } from "../helpers/const";

const Company = () => {
  return (
    <Box w={"full"}>
      <Container maxW={"container.lg"}>
        <Grid
          gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}
          gap={6}
          py={10}
          pb={20}
        >
          {company.map((c, i) => c.image)}
        </Grid>
      </Container>
    </Box>
  );
};

export default Company;
