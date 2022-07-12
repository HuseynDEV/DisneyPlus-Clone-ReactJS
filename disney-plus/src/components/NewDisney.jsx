import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from '../MovieData'

const NewDisney = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState([]);
    data.filter((data) => {
      if (data.type === "new") {
        setState((current) => [...current, data]);
      }
    });
  }, []);

  return (
    <Container>
      <h4>New Disney</h4>
      <Content>
        {state.map((item) => (
          <Wrap ket={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.backgroundImg} alt="" />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0;
`;

const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 2rem;

@media(max-width:1100px){
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media(max-width:650px){
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
`;

const Wrap = styled.div`
  width: 100%;
  border: 3px solid white;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export default NewDisney;
