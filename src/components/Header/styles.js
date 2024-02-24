import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  box-sizing: border-box;
  z-index: 2;
  position: absolute;

  .actived{
      display: block;
    }
  
  > h1{
    font-weight: 700;
    font-size: 2rem;
    transition: all .4s;
    
    &:hover{
      cursor: pointer;
      color: #dc2751;
    }
    
    @media (max-width: 1050px) {
      font-size: 1.5em;
    }
  }

  > ul{
    display: flex;
    gap: 2rem;

    @media (max-width: 950px) {
      display: none;
    }
    
    > li{
      font-size: clamp(1rem, 1em + .3vw, 2em);
      font-weight: 900;
      line-height: 15px;
      transition: all .4s;
  
      &:hover{
        color: #dc2751;
        cursor: pointer;
      }
    }
  }

`