import { ContainerDoubts } from "./style";
import { useState } from "react";
import { ButtonToggleFAQ } from "../Layouts/ButtonToggleFAQ";

export function Doubts(){
  const [expanded, setExpanded] = useState(false)

  function toggleFAQ(i){
    setExpanded(!expanded)
    
    var btnList = document.querySelectorAll(".btnFAQ");
    var answer = btnList[i].childNodes[1];
    var element = answer.classList;

    if(element[1] == "expanded"){
      answer.classList.remove("expanded")
    } else{
      answer.classList.add("expanded")
    }
  }

  const doubtsList = [
    {
      question: "O que é Landing Page?",
      answer: "É uma página da web projetada especificamente para receber o tráfego direcionado de uma campanha de marketing, anúncio ou link. O objetivo principal de uma landing page é converter os visitantes em leads ou clientes"
    },
    {
      question: "Quanto tempo leva para criar um site ou landing page?",
      answer: "O período de criação varia entre 1 ou 2 semanas dependendo das funcionalidades e número de páginas que serão pedidas."
    },
    {
      question: "Como funciona o processo de design e desenvolvimento?",
      answer: "O cliente passa algumas especificações como estilo de design, cores, fontes e as funcionalidades que ele deseja e depois passa por um conjuto de análises para chegar a uma precificação e logo após cpmeçar o processo de desenvolvimento."
    },
    {
      question: "Posso fazer atualizações no site ou landing page por conta própria?",
      answer: "Sim, disponibilizamos o login de acesso no serviço de hospedagem mais o arquivo compactado do site"
    }
  ]
  
  return(
    <ContainerDoubts>

      <div className="textContainer">
        <span>Perguntas frequentes</span>
        <h1>Principais dúvidas</h1>
        <div className="line"></div>
      </div>

      <div className="containerFAQ">
        {doubtsList.map((doubt, i) => {
          return(
            <ButtonToggleFAQ onclick={() => toggleFAQ(i)} key={i}
            className={`btnFAQ ${i}`}>
              <span className="questionFAQ">{doubt.question}</span>
              <span className={` answerFAQ `}>{doubt.answer}</span>
            </ButtonToggleFAQ>
          )
        })}
      </div>
    </ContainerDoubts>
  )
}