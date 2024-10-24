import styled from "@emotion/styled";
import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "../../../styles/button";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductsCard = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <Grid2 container spacing={3.5}>
          <Grid2
            size={{ xs: 12, md: 7 }}
            color="#fff"
            bgcolor={"#464646"}
            px={4}
            py={5}
            spacing={3.5}
            container
            borderRadius={4}
          >
            <Typography variant="h4">Meta Title and Description</Typography>
            <Typography variant="body1">
              Install our plugin, and our AI immediately analyzes your content's
              tone, industry, language, and keywords to craft optimized meta
              titles and descriptions.
            </Typography>
            <Typography variant="body1">
              You still have full control to adjust tone and add focus keywords,
              ensuring your meta information is perfectly tailored to your
              needs. Plus, our AI generates three versions of meta titles and
              descriptions by default, so you can easily pick the one that best
              suits your preferences or generate another set of meta title and
              description.
            </Typography>
            <Box>
              <img
                src="https://unleashai.co/static/assets/img/gridImg1.png"
                alt=""
              />
            </Box>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 5 }}
            color="#fff"
            bgcolor={"#3a5c45"}
            px={4}
            py={5}
            spacing={3.5}
            container
            borderRadius={4}
          >
            <Typography variant="h4">Alt Tags</Typography>
            <Typography variant="body1">
              Alt tags are often overlooked in on-page SEO process, but we've
              got you covered. No need to spend hours manually adding
              descriptive, SEO-friendly alt tags to your media files.
            </Typography>
            <Typography variant="body1">
              Our software can generate them all at once or allow you to audit
              them before they’re added on the site. You can automate the
              process by allowing our AI software to instantly generate alt tags
              as soon as you upload images to your site.
            </Typography>
            <Box>
              <img
                src="https://unleashai.co/static/assets/img/gridImg2.png"
                alt=""
              />
            </Box>
          </Grid2>
        </Grid2>

        <CustomButton
          fw="500"
          size="17px"
          pl="25px"
          pr="25px"
          pt="12px"
          pb="12px"
          mt="30px"
          ml="auto"
          mr="auto"
          bg="#BE3DFB"
          color="#fff"
        >
          Start a Free Trial <FaArrowRightLong />
        </CustomButton>
      </section>
    </Wrapper>
  );
};

export default ProductsCard;

const Wrapper = styled.div`
  .section-center {
    width: auto;
    background-color: #333;
    max-width: 1400px;
    border-radius: 1.5rem;
    padding: 1.25rem;
    @media (min-width: 900px) {
      padding: 3.5rem;
    }
  }
`;
