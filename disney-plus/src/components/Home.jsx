import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewes from "./Viewes";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Trendings from "./Trendings";
import Originals from "./Originals";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewes/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trendings/>
    </Container>
  );
};


const Container=styled.div`
position:relative;
min-height: 100vh;
top:72px;
padding:0 5rem;
display:block;
overflow-x:hidden;
&:after{
    background:url(${require('../images/home-background.png')}) center center/ cover  ;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}

`

export default Home;
