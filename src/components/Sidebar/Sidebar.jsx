import styled from "@emotion/styled";
import { LuMenu } from "react-icons/lu";
import { Box, Button, Drawer, Stack } from "@mui/material";
import { HeaderLogo } from "../../assets";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomButton } from "../../styles/button";
import { TbLogin2 } from "react-icons/tb";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <SideBarWrapper>
      <section className="section-center">
        <Stack
          direction="row"
          justifyContent="space-between"
          width="100%"
          className="logo-wrapper"
        >
          <Button
            className="sidebar-btn"
            sx={{ padding: 0, minWidth: "auto" }}
            onClick={toggleDrawer(true)}
          >
            <LuMenu size="34" />
          </Button>

          <Link to={"/"}>
            <img src={HeaderLogo} alt="" />
          </Link>
        </Stack>
      </section>

      <Drawer open={open} onClick={toggleDrawer(false)}>
        <Box sx={{ width: 280, px: 2.5, py: 4 }} className="sidebar-inner">
          <Box sx={{ textAlign: "right" }}>
            <Button
              sx={{ padding: 0, minWidth: "initial" }}
              onClick={() => toggleDrawer(false)}
            >
              <FaTimes size={22} />
            </Button>
          </Box>

          <Stack mt={3} className="sidebar-links" spacing={2}>
            <Link to="/products">Products</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#">Account</Link>

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
        </Box>
      </Drawer>
    </SideBarWrapper>
  );
};

export default Sidebar;

const SideBarWrapper = styled.nav`
  border-bottom: 1px solid #0000002e;
  padding: 0.5rem 0;

  .logo-wrapper {
    img {
      width: 180px;
    }
  }

  @media (min-width: 961px) {
    display: none;
  }
`;
