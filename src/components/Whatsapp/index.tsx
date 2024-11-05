import React from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../images/whatsapp.png";
import styled from "styled-components";
import { Space } from "antd";

const StyledWSpace = styled(Space)`
  width: 50px;
  background: transparent;
  position: fixed;
  z-index: 100;
  right: 3%;
  bottom: 2%;
`;
const index = () => {
  return (
    <div>
      <Link
        to="https://wa.me/923427084929?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%products"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledWSpace>
          <img src={whatsapp} alt="" width={50} height={50} />
        </StyledWSpace>
      </Link>
    </div>
  );
};

export default index;
