import { ContactContainer } from "./style";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export function Contact(){

  useLayoutEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".textContainer", {
      opacity: 1,
      width: "auto",
      scrollTrigger: {
        trigger: "#sectionContact",
        start: "top 500px"
      }
    })

    return () => { gsap.killTweensOf(".textContainer")}
  },[])

  return(
    <>
      <ContactContainer id="sectionContact">
        <div className="textContainer">
          <span>Desenvolvemos seu futuro digital</span>
          <h1><span>Vamos</span> Começar?</h1>
          <div className="line"></div>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5521975875130&text=Quero%20dar%20o%20primeiro%20passo%20para%20construir%20a%20identidade%20digital%20da%20minha%20empresa." className="btnHeroArea" aria-label="Butão para desenvolver Seu Futuro Digital">Desenvolva Seu Futuro Digital</a>
      </ContactContainer>
    </>
  )
}