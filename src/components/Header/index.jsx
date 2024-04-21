import { useState } from "react"
import { List, X } from "@phosphor-icons/react";
import { HeaderContainer } from "./style";

export function Header(){
  const navItens = [
    {
      name: "Home",
      navigate: "/" 
    },
    {
      name: "Serviços",
      navigate: "#sectionServices"
    },
    {
      name: "Projetos",
      navigate: "#sectionProjects"
    },
    {
      name: "Dúvidas",
      navigate: "#sectionDoubts"
    },
    {
      name:"Contato",
      navigate: "#sectionContact"
    }
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
        <a href="/" aria-label="Redirecionar para página inicial">Lates Solucions</a>

        {isOpen ? 
          <X size={32} onClick={toggleMenu} weight="bold" color={navbar ? "black" : "white"}/>
        :
          <List className="btnMobile" onClick={toggleMenu} size={32} color={navbar ? "black" : "white"} weight="bold"/>
        }

        <nav className="navigation">
          {navItens.map((item) => {
            return(
              <a href={item.navigate} key={item.name} aria-label={`Redirecionar para seção de ${item.name}`}>
                {item.name} 
              </a>
            )
          })}
        </nav>
        
        <nav className={` menuMobile ${isOpen ? "actived" : ""}`}>
          {navItens.map((item) => {
            return(
              <a href={item.navigate} onClick={() => setIsOpen(false)} key={item.name} aria-label={`Redirecionar para seção de ${item.name}`}>
                {item.name}
              </a>
            )
          })}
        </nav>

        <a href="https://api.whatsapp.com/send?phone=5521975875130&text=Quero%20dar%20o%20primeiro%20passo%20para%20construir%20a%20identidade%20digital%20da%20minha%20empresa."
        target="_blank" className="btnHeader" aria-label="Botão para Solicitar Orçamento">Solicitar Orçamento</a>
      </HeaderContainer>
    </>
  )
}

