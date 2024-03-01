import { ContainerDoubts } from "./style";
import { useState } from "react";
import { ButtonToggleFAQ } from "../Layouts/ButtonToggleFAQ";

export function Doubts(){
  const [expanded, setExpanded] = useState(true)

  function toggleFAQ(){
    setExpanded(!expanded)
    console.log(expanded)
  }
  
  return(
    <ContainerDoubts>
      <div className="textContainer">
        <span>Perguntas frequentes</span>
        <h1>Principais dúvidas</h1>
        <div className="line"></div>
      </div>
      <div className="containerFAQ">
        <ButtonToggleFAQ onClick={toggleFAQ} 
        className={` btnFAQ ${expanded ? "expanded" : ""}`}>
          {/* <span className="questionFAQ">O que é Landing Page?</span>
          <span className={` answerFAQ ${expanded ? "expanded" : ""}`}>é uma página da web projetada especificamente para receber o tráfego direcionado de uma campanha de marketing, anúncio ou link. O objetivo principal de uma landing page é converter os visitantes em leads ou clientes</span> */}
        </ButtonToggleFAQ>
      </div>
    </ContainerDoubts>
  )
}