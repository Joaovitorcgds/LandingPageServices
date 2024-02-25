import { useState } from "react"
import { List, X } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

export function Header(){
  const navItens = [
    "Home",
    "Serviços",
    "Projetos",
    "Dúvidas",
    "Contato"
  ]
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  function toggleMenu(){
    if(isOpen){
      setIsOpen(!isOpen)
    }
    else{
      setIsOpen(!isOpen)
    }
  }

  function stickyNavbar(){
    if(window.scrollY >= 80){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", (stickyNavbar))

  return(
    <>
      <HeaderContainer className={navbar ? "sticky" : ""}>
        <h1>Desenvolvedor</h1>

        {isOpen ? 
          <X size={32} onClick={toggleMenu} weight="bold" color={navbar ? "black" : "white"}/>
        :
          <List className="btnMobile" onClick={toggleMenu} size={32} color={navbar ? "black" : "white"} weight="bold"/>
        }

        <ul className="navigation">
          {navItens.map((item) => {
            return(
              <a href="#" key={item}>
                <li>{item}</li>
              </a>
            )
          })}
        </ul>
        
        <ul className={` menuMobile ${isOpen ? "actived" : ""}`}>
          {navItens.map((item) => {
            return(
              <a href="#" key={item}>
                <li>{item}</li>
              </a>
            )
          })}
        </ul>

        <button className="btnHeader">Solicitar Orçamento</button>
      </HeaderContainer>
    </>
  )
}

