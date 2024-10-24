import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../../styles/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import autoplay styles
import { Autoplay } from "swiper/modules"; // Import the Autoplay module

const Hero = () => {
  return (
    <Wrapper>
      <Box spacing={2.5} textAlign="center" className="section-center">
        <Typography variant="h3" fontWeight={"700"} color="primary">
          Automate
        </Typography>
        <Typography variant="h3" fontWeight={"700"} color="#0f141e">
          Your SEO Using AI
        </Typography>
        <Typography
          mt={2}
          maxWidth="700px"
          fontSize="18px"
          variant="body1"
          color="#2c374f"
        >
          Unleash the power of AI to automatically create search engine-friendly
          meta titles, descriptions, alt tags, and social share cards for each
          page and product on your site.
        </Typography>
        <CustomButton
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
        </CustomButton>
      </Box>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]} // Enable the Autoplay module
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ maxWidth: "1050px", marginTop: "3rem" }}
      >
        <SwiperSlide>
          <img
            src="https://unleashai.co/static/assets/img/image-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://unleashai.co/static/assets/img/image-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://unleashai.co/static/assets/img/image-3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background: url("https://unleashai.co/static/assets/img/clip-path-img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: 100% 50%, 100% 50%; */
  padding: 3rem 0;

  > div {
    display: grid;
    place-items: center;
  }
`;
