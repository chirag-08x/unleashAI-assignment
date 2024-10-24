import styled from "@emotion/styled";
import { serviceCards } from "../../../data/data";
import { Box, Button, Stack, Typography, Grid2 } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTheme } from "@emotion/react";

const Services = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Box className="section-center">
        <Box textAlign="center">
          <Typography
            variant="body1"
            color="secondary.light"
            mb={1.5}
            textTransform="uppercase"
          >
            Let AI write your Meta Title, Description, Alt Tags, Social Share
            Cards and more
          </Typography>
          <Typography
            variant="h4"
            color="#fff"
            maxWidth="860px"
            textTransform="capitalize"
            m="0 auto"
            mb={4}
          >
            Why write meta info, alt tags, and social share cards yourself? Let
            our AI work its magic and handle it all for you.
          </Typography>
        </Box>

        <Grid2
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 4 }}
          container
        >
          {serviceCards.map(({ id, title, desc }) => {
            return (
              <Grid2
                size={{ xs: 12, md: 6, lg: 4 }}
                key={id}
                bgcolor="#f4f7ee"
                px={5}
                py={4}
                borderRadius={3}
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  variant="h5"
                  fontWeight={500}
                  color="secondary.dark"
                  mb={2.5}
                >
                  {title}
                </Typography>

                <hr />

                <Typography mt={1.5} variant="body1" lineHeight={1.8}>
                  {desc}
                </Typography>

                <Button
                  sx={{
                    display: "flex",
                    gap: "8px",
                    minWidth: "initial",
                    padding: 0,
                    mt: 5,
                  }}
                >
                  Read More <FaArrowRightLong />
                </Button>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  background: url("https://unleashai.co/static/assets/img/curve.png");
  background-position: top;
  padding: 28rem 0 3rem 0;
  margin-top: -25rem;
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  place-items: center;

  /* background-repeat: no-repeat; */
`;