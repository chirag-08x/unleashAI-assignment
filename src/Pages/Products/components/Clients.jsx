import styled from "@emotion/styled";
import React from "react";
import { ClientCards } from "../../../components";
import { Typography } from "@mui/material";
import { CustomButton } from "../../../styles/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Clients = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <Typography textAlign={"center"} variant="h2" color="#00000070" mb={3}>
          Trusted by over <span style={{ color: "#000" }}>50</span> website
          owners
        </Typography>

        <ClientCards />

        <CustomButton ml="auto" mr="auto" mt="1rem" color="#7346f1">
          Get Started Now <FaArrowRightLong />
        </CustomButton>
      </section>
    </Wrapper>
  );
};

export default Clients;

const Wrapper = styled.div`
  padding: 3rem 0;
`;
