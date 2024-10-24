import styled from "@emotion/styled";
import { Grid2, Typography } from "@mui/material";
import { CustomButton } from "../../../styles/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <Grid2 container minHeight="73vh" alignItems={"center"} spacing={10}>
          <Grid2
            size={{ xs: 12, lg: 6 }}
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography color="primary" variant="h1">
              AI-Powered SEO for
            </Typography>
            <Typography variant="h1" mb={2}>
              WordPress Sites
            </Typography>
            <Typography
              variant={{ sm: "body2", lg: "body1" }}
              maxWidth={"800px"}
              fontSize={{ md: "17px", lg: "19px" }}
              color="#2c374f"
              display={"block"}
              m={{ sm: "0 auto", lg: "0 0" }}
            >
              Our cutting-edge AI tool is specifically designed for WordPress
              website owners and agencies to streamline the process of
              generating SEO-friendly meta titles, descriptions, alt tags, and
              OG tags.
            </Typography>
            <SignUpBtn
              fw="500"
              size="17px"
              pl="25px"
              pr="25px"
              pt="12px"
              pb="12px"
              mt="30px"
              bg="#214FF3"
              color="#fff"
            >
              Sign up for forever free plan <FaArrowRightLong />
            </SignUpBtn>
          </Grid2>

          <Grid2
            size={{ xs: 12, lg: 6 }}
            container
            justifyContent={{ sm: "center", lg: "left" }}
          >
            <img
              src="https://unleashai.co/static/assets/img/products-thumb.png"
              alt=""
              style={{ maxWidth: "550px" }}
            />
          </Grid2>
        </Grid2>
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background: url("https://unleashai.co/static/assets/img/clip-path-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 1rem;
`;

const SignUpBtn = styled(CustomButton)`
  margin: 30px auto 0 auto;
  @media (min-width: 1200px) {
    margin: 30px 0 0 0;
  }
`;
