import styled from "styled-components";
import { ContainerServices } from "./style.js";
import { Card } from "../Layouts/Card.jsx";
import { servicesUtil } from "../../util/ServicesUtil.jsx";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export function Services(){

  useLayoutEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".containerTextServices", {
      opacity: 1,
      width: "auto",
      scrollTrigger: {
        trigger: "#sectionServices",
        start: "top 400px"
      }
    })

    return () => { gsap.killTweensOf(".containerTextServices")}
  },[])

  return(
    <>
      <ContainerServices id="sectionServices">
        <div className="containerTextServices">
          <span>O que fazemos</span>
          <h1>Nossos Serviços</h1>
          <div className="line"></div>
        </div>

        <div className="containerCardServices">
          {servicesUtil.map((item) => {
            return(
              <Card key={item.title} className="cardServices">
                {item.path(ImgSVG)}
                <h1 className="titleCard">{item.title}</h1>
                <span className="subtitleCard">{item.subTitle}</span>
              </Card>
            )
          })}
        </div>
      </ContainerServices>
    </>
  )
}

const ImgSVG = styled.svg`
  width: 90px;
  height: auto;
  margin-bottom: 16px;
`
