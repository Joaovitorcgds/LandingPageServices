import { ContainerDoubts } from "./style";
import { useState } from "react";
import { ButtonToggleFAQ } from "../Layouts/ButtonToggleFAQ";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export function Doubts(){
  const [expanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".textContainer", {
      opacity: 1,
      width: "auto",
      scrollTrigger: {
        trigger: "#sectionDoubts",
        start: "top 400px"
      }
    })

    return () => { gsap.killTweensOf(".textContainer")}
  },[])

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
      question: "Quanto tempo leva para as estratégias de tráfego gerar resultados?",
      answer: "O tempo para ver resultados pode variar dependendo de diversos fatores, como a competitividade do seu nicho, a qualidade do seu conteúdo e a eficácia das estratégias implementadas. Em geral, esperamos começar a ver melhorias significativas dentro de alguns meses, mas os resultados mais substanciais podem levar de seis meses a um ano para se materializarem completamente."
    },
    {
      question: "Quais métricas serão usadas para avaliar o sucesso?",
      answer: "Estaremos acompanhando várias métricas-chave, incluindo tráfego do site, classificações de palavras-chave, taxa de cliques (CTR), taxa de conversão, tempo no site e outros indicadores relevantes. Essas métricas nos ajudarão a avaliar o desempenho das estratégias implementadas e fazer ajustes conforme necessário para alcançar os melhores resultados."
    },
    {
      question: "Qual é o custo dos serviços?",
      answer: "Os custos dos nossos serviços podem variar dependendo do escopo do trabalho, da complexidade das estratégias necessárias e do tempo e recursos envolvidos. Estamos dispostos a discutir suas necessidades específicas e oferecer um orçamento personalizado que atenda às suas expectativas e objetivos de negócio."
    },
    {
      question: "Que tipo de resultados podemos esperar a curto e longo prazo?",
      answer: "A curto prazo, podemos esperar ver melhorias incrementais no tráfego do site e nas classificações de palavras-chave à medida que implementamos as estratégias iniciais. A longo prazo, nosso objetivo é alcançar um crescimento sustentável e contínuo do tráfego orgânico, resultando em maior visibilidade online, autoridade de domínio e, por fim, um impacto positivo nas suas metas de negócio."
    }
  ]
  
  return(
    <ContainerDoubts id="sectionDoubts">
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