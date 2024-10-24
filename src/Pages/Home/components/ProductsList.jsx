import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import ClientCards from "../../../components/ClientCards/ClientCards";

const ProductsList = () => {
  return (
    <Wrapper>
      <Box className="section-center">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 18, lg: 32 }}
          mb={3}
        >
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="body1" color="secondary">
              UNLEASH AI
            </Typography>
            <Typography
              variant="h4"
              fontSize="32px"
              fontWeight={600}
              color="#0f141e"
              letterSpacing={1.2}
              mt={{ xs: 1, md: 1.5 }}
            >
              Designed By Experts, Built For Everyone
            </Typography>
          </Box>

          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="body1"
              maxWidth="820px"
              color="#67748e"
              fontSize="17px"
            >
              Created by web design agency owners and SEO professionals, our
              tool automates meta info and more, while being user-friendly for
              all website owners.
            </Typography>

            <Button
              sx={{
                display: "flex",
                gap: "8px",
                minWidth: "initial",
                padding: 0,
                margin: "0 auto",
                mt: 4,
                textTransform: "capitalize",
                fontSize: "16px",
              }}
              color="secondary"
            >
              View Our Products <FaArrowRightLong />
            </Button>
          </Box>
        </Stack>

        <ClientCards />
      </Box>
    </Wrapper>
  );
};

export default ProductsList;

const Wrapper = styled.div`
  padding: 3.5rem 0;
`;
