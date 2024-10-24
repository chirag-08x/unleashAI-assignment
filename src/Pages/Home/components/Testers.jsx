import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { ReviewCards } from "../../../components";

const Testers = () => {
  return (
    <Wrapper>
      <Box className="section-center">
        <Typography variant="h4" fontWeight={500} textAlign="center" mb={3}>
          Our{" "}
          <Box component="span" color={(theme) => theme.palette.primary.main}>
            Beta Testers
          </Box>{" "}
          Reviews
        </Typography>

        <ReviewCards />
      </Box>
    </Wrapper>
  );
};

export default Testers;

const Wrapper = styled.div`
  padding-bottom: 3rem;
  padding-top: 1rem;
`;
