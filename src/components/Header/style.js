import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  box-sizing: border-box;
  z-index: 3;
  position: fixed;
  
  &.sticky {
    top: -70px;
    left: 0;
    transition: transform .5s;
    transform: translateY(70px);
    box-shadow: 0px 5px 15px rgb(15 36 84 / 5%);
    background-color: white;
    color: black;

    nav a{
      color: black;
      transition: all .4s;
      
      &:hover{
        cursor: pointer;
        color: #dc2751;
      }
    }
    
    .btnHeader{
      color: black;
      &:hover{
        color: white;
      }
    }
  }
  
  > h1{
    font-weight: 700;
    font-size: 1.5rem;
    transition: color .2s;
    
    &:hover{
      cursor: pointer;
      color: #dc2751;
    }

  }

  .btnMobile{
    @media (min-width: 950px){
      display: none;
    }
  }

  .menuMobile {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    padding: 15px;
    width: 100vw;
    height: 0;
    background-color: white;
    opacity: 0;
    pointer-events: none;
    transition: all ease .9s;
    overflow: auto;

    a{
      text-decoration: none;
      color: black;
      font-size: 16px;
      font-weight: 700;
      line-height: 15px;
      transition: all .4s;
      padding: 15px;
  
      &:hover{
        color: #dc2751;
        cursor: pointer;
        background-color: #f0f0f3;
      }
    }
  }

  .actived{
    top: 69px;
    opacity: 1;
    height: 250px;
    pointer-events: auto;
    z-index: 3;
    overflow: hidden;
    box-shadow: 0px 5px 15px rgb(15 36 84 / 5%);
  }

  > .navigation{
    display: flex;
    gap: 2rem;

    a{
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: 900;
      line-height: 15px;
      transition: all .4s;
  
      &:hover{
        color: #dc2751;
        cursor: pointer;
      }
    }

    @media (max-width: 950px) {
      display: none;
    }
  }

  .btnHeader{
    background-color: transparent;
    padding: 8px 15px;
    color: white;
    font-weight: 900;
    font-size: 16px;
    border: 2px solid #dc2751;
    border-radius: 80px;
    transition: all .4s;

    &:hover{
      cursor: pointer;
      background-color: #dc2751;
    }

    @media (max-width: 950px){
      display: none;
    }
  }
`