import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Content>
      <CTA>
        <CTALogoOne src={require("../images/cta-logo-one.png")} alt="" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src={require("../images/cta-logo-two.png")} alt="" />
      </CTA>
      <BgImage />
    </Content>
  );
};

const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;



`;

const CTA = styled.div`
  max-width: 650px;
  position: relative;
  width: 100%;
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 10px;
  width: 100%;
`;

const BgImage = styled.div`
  background-image: url(${require("../images/login-background.jpg")});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-top: 15px;
  width: 100%;
`;

const SignUp = styled.button`
  width: 100%;
  padding: 16px 0;
  margin-bottom: 10px;
  background: #0063e5;
  color: white;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const Description = styled.div`
  color: white;
  font-size: 18px;
  margin: 5px 0;
`;

export default Login;
