import { ContactContainer } from "./style";
import { Button } from "../Layouts/Button";
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


          <Button margin="15px 0px 0px" ftsize={`clamp(.5rem, .7em + 1vw, 2em)`} bgcolor="#dc2751">Quero fazer minha Landing Page</Button>
       
      </ContactContainer>
    </>
  )
}