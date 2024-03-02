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
    {question: "O que é Landing Page?",
    answer: "é uma página da web projetada especificamente para receber o tráfego direcionado de uma campanha de marketing, anúncio ou link. O objetivo principal de uma landing page é converter os visitantes em leads ou clientes"},
    {question: "jajajajaj",
     answer: "fjdofjdspofjpsodjpfodsjfposjdpfojsdpofjdsopjfposdjfposdjfpojsdof"}
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