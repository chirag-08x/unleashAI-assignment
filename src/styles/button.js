import styled from "@emotion/styled";

export const CustomButton = styled.button`
  width: ${(props) => (props.w ? props.w : "auto")};
  padding-left: ${(props) => (props.pl ? props.pl : "1rem")};
  padding-right: ${(props) => (props.pr ? props.pr : "1rem")};
  padding-top: ${(props) => (props.pt ? props.pt : "10px")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "10px")};
  border-radius: ${(props) => (props.br ? props.br : "8px")};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  background-color: ${(props) => (props.bg ? props.bg : "transparent")};
  color: ${(props) => (props.color ? props.color : "black")};
  text-transform: capitalize;
  border: none;
  font-weight: ${(props) => (props.fw ? props.fw : 400)};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-family: "Roboto";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
