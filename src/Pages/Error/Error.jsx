import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { ErrorImg } from "../../assets";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Error = () => {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <Wrapper>
      <section className="section-center">
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img style={{ maxWidth: "500px" }} src={ErrorImg} alt="" />
          <Link
            to={"/"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "1rem",
              color: "purple",
              textDecoration: "underline",
            }}
          >
            <FaArrowLeftLong /> Go Back
          </Link>
        </Stack>
      </section>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  min-height: 50vh;
  padding: 3rem 0;
`;
