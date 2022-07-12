import React, { useState } from "react";
import styled from "styled-components";
import { Home, Search, List, Star, Movie, Theaters } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Nav>
      <Link to="/home">
        <Logo>
          <img
            src={
              "https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/master/public/images/logo.svg"
            }
            alt=""
          />
        </Logo>
      </Link>
      <Menu>
        <a>
          <Home />
          <span>Home</span>
        </a>
        <a>
          <Search />
          <span>Search</span>
        </a>
        <a>
          <List />
          <span>Watchlist</span>
        </a>
        <a>
          <Star />
          <span>Originals</span>
        </a>
        <a>
          <Movie />
          <span>Movies</span>
        </a>

        <a>
          <Theaters />
          <span>Theaters</span>
        </a>
      </Menu>

      <Link to="/">
        <Login>
          <img src={require("../images/profile.avif")} alt="" />
        </Login>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  inset: 0;
  height: 70px;
  background: #090b13;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;

const Logo = styled.div`
  width: 80px;

  img {
    display:block
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: auto;
  gap: 1.2rem;
  text-transform: uppercase;

  @media (max-width: 900px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 5px;
    text-align: center;
    cursor: pointer;

    span {
      position: relative;
      font-size: 14px;
    }

    span:after {
      content: "";
      height: 2px;
      background: white;
      width: auto;
      bottom: 0;
      position: absolute;
      left: 0;
      right: 0;
      opacity: 0;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
      visibility: hidden;
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.div`
  width: 45px;
  height: 45px;

  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
  }
`;

export default Header;
