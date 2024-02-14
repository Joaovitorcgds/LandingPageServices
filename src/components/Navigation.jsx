import { useState, useEffect } from "react"
import styled from "styled-components"
import { Button } from "./Layouts/Button"
import { List } from "@phosphor-icons/react";

export function Navigation(){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth < "950"){
      setIsMobile(true)
    }
    else(setIsMobile(false))
  },[]);

  const navItens = [
    "Home",
    "Serviços",
    "Projetos",
    "Dúvidas",
    "Contato"
  ]

  return(
    <>
      <Nav>
        <div className="logo">
          <Logo>Desenvolvedor</Logo>
        </div>
        
        <NavItens>
          {navItens.map((item) => {
            return(
              <ItemList key={item}>{item}</ItemList>
            )
          })}
        </NavItens>

        {!isMobile ? 
          <Button bgcolor="transparent">Solicitar Orçamento</Button>
        : 
          <></>
        }

        {isMobile?
          <List size={32} color="#ffff" weight="fill" />
        : 
          <></>
        }
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  z-index: 5;
  position: ab;
`;
const Logo = styled.h1`
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
`
const NavItens = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 950px) {
    display: none;
  }
`
const ItemList = styled.li`
  font-size: clamp(1rem, 1em + .3vw, 2em);
  font-weight: 900;
  line-height: 15px;
  transition: all .4s;

  &:hover{
    color: #dc2751;
    cursor: pointer;
  }
`
