import { useState, useEffect } from "react"
import { Button } from "../Layouts/Button"
import { List } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

export function Header(){
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(window.innerWidth < "950"){
      setIsMobile(true)
    }
    else(setIsMobile(false))
  },[]);

  function toggleMenu(){
    if(isOpen){
      setIsOpen(!isOpen)
    }
    else{
      setIsOpen(!isOpen)
    }
  }

  const navItens = [
    "Home",
    "Serviços",
    "Projetos",
    "Dúvidas",
    "Contato"
  ]

  return(
    <>
      <HeaderContainer>
        <h1>Desenvolvedor</h1>
        
        {isMobile?
          <List className="btnMobile" onClick={toggleMenu} size={32} color="#ffff" weight="fill" />
        : 
          <></>
        }
  
        <ul className={isOpen ? "actived" : ""}>
          {navItens.map((item) => {
            return(
              <li key={item}>{item}</li>
            )
          })}
        </ul>

        {window.innerWidth < "950" ? 
          <></>
        : 
        <Button className="btnHeader" bgcolor="transparent">Solicitar Orçamento</Button>
        }
      </HeaderContainer>
    </>
  )
}

