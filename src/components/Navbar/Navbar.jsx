import { Box, Stack } from "@mui/material";
import { HeaderLogo } from "../../assets";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import { CustomButton } from "../../styles/button";

const Navbar = () => {
  return (
    <Nav>
      <section className="section-center">
        <Box className="logo-wrapper">
          <img src={HeaderLogo} alt="" />
        </Box>

        <Stack direction="row" spacing={4} className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">Account</Link>
        </Stack>

        <Stack direction="row" spacing={2} className="nav-btns">
          <CustomButton fw="500" size="15px">
            <TbLogin2 /> Log In
          </CustomButton>

          <CustomButton
            color="#fff"
            bg="#BE3DFB"
            size="16px"
            fw="500"
            pl="1.35rem"
            pr="1.35rem"
            pt="13px"
            pb="13px"
          >
            Get Started
          </CustomButton>
        </Stack>
      </section>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  border-bottom: 1px solid #0000002e;
  padding: 1rem 0;

  @media (max-width: 960px) {
    display: none;
  }

  .section-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-items: center;
    align-items: center;
  }

  .logo-wrapper {
    img {
      width: 225px;
    }
  }
`;
