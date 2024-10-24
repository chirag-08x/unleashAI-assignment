import styled from "@emotion/styled";
import React from "react";
import { Divider, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <section
        className="section-center"
        style={{
          background: "#F5F7FE",
          border: "1px solid #E5E1FF",
          maxWidth: "1400px",
          borderRadius: "25px",
          padding: "2.5rem",
        }}
      >
        <Grid2
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          container
          mb={6}
        >
          <Grid2 size={{ sm: 12, md: 4 }}>
            <img
              src="https://unleashai.co/static/assets/img/footer-logo.png"
              alt=""
              style={{ width: "240px" }}
            />
          </Grid2>

          <Grid2
            direction="row"
            spacing={4}
            justifySelf={"start"}
            justifyContent={"space-evenly"}
            size={{ sm: 12, md: 8 }}
            container
            className="footer-links"
            sx={{
              mt: { xs: 4, md: 0 },
            }}
          >
            <Link to={"/products"}>Products</Link>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Contact Us</Link>
            <Link to={"#"}>Privacy Policy</Link>
          </Grid2>
        </Grid2>

        <Divider sx={{ width: "95%", margin: "0 auto" }} />

        <Typography
          variant="body1"
          mt={5}
          textAlign={"center"}
          color="#2c374f"
          fontSize={"13px"}
        >
          © {new Date().getFullYear()} UnleashAI. All rights reserved.
        </Typography>
      </section>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: url("https://unleashai.co/static/assets/img/footerBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 3rem 0;

  .footer-links {
    a {
      color: #0b1220;
      font-size: 15px;
    }
  }
`;
