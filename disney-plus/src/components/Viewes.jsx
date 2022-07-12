import React from "react";
import styled from "styled-components";

const Viewes = () => {
  return (
    <Container>
      <Wrap>
        <img src={require("../images/viewers-disney.png")} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={require("../video/disney.mp4")} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={require("../images/viewers-national.png")} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={require("../video/national.mp4")} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={require("../images/viewers-pixar.png")} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={require("../video/pixar.mp4")} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={require("../images/viewers-starwars.png")} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={require("../video/star-wars.mp4")} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={require("../images/viewers-marvel.png")} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={require("../video/marvel.mp4")} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;


`;

const Wrap = styled.div`
  padding-top: 56.25%;
  position: relative;
  border: 3px solid white;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.7s all;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    opacity: 1;
    object-fit: cover;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: 0.7s all;
    border-radius:10px;
  }

  &:hover {
    transform: scale(1.1);

    video {
      opacity: 1;
    }
  }
`;

export default Viewes;
