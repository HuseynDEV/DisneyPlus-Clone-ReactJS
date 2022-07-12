import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../MovieData";
import styled from "styled-components";

const Detail = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    data.filter((item) => {
      if (item.id == params.id) {
        setMovie(item);
      }
    });
  }, [params]);

  console.log(movie);

  return (
    <DetailCont>
      <Content>
        <BgImg src={movie.backgroundImg} />

        <About>
          <Card src={movie.titleImg} />
          <Buttons>
            <Play>
             <img src={require('../images/play-icon-black.png')} alt="" />
              <span>Start</span>
            </Play>
            <Trailer>
            <img src={require('../images/play-icon-white.png')} alt="" />
              <span>Trailer</span>
            </Trailer>
            <GroupCont>
            <img src={require('../images/group-icon.png')} alt="" />
            </GroupCont>
          </Buttons>
          <Overview>{movie.description}</Overview>
        </About>
      </Content>
    </DetailCont>
  );
};

const DetailCont = styled.div`
  position: relative;
  width: 100%;
  height: 91vh;
  display: block;
  overflow: hidden;
  margin-top: 72px;
  padding: 0 5rem;
`;

const Content = styled.div``;

const BgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  z-index: -1;

  @media (max-width: 768px) {
    width: initial;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin-top: 70px;
`;

const Card = styled.img`
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  alig-items: center;
  gap: 2rem;
`;

const Play=styled.button`
padding:.7rem 3rem;
display: flex;
alig-items: center;
background:white;
border-radius:5px;
transition:.6s all;

span{
    font-size:20px;
    margin-left:3px
}

&:hover{
    transform:scale(1.1)
}

`

const Trailer=styled(Play)`
background:black;
color:white;
border:2px solid white
`


const GroupCont=styled.div`


img{
    background:black;
    border-radius:50%;
    border:2px solid white
}

`

const Overview = styled.div`
  font-size: 18px;
  margin-top:10px
`;

export default Detail;
