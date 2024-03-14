import { ContainerProjects } from "./style.js";
import { ProjectsUtil } from "../../util/ProjectsUtil.js";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export function Projects() {

  useLayoutEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".textContainer", {
      opacity: 1,
      width: "auto",
      scrollTrigger: {
        trigger: "#sectionProjects",
        start: "top 400px"
      }
    })

    return () => { gsap.killTweensOf(".textContainer")}
  },[])

  return (
    <ContainerProjects id="sectionProjects">
      <div className="textContainer">
        <span>Projetos & Portfólio</span>
        <h1>Trabalhos Realizados</h1>
        <div className="line"></div>
      </div>

      <div className="cardContainer">
        {ProjectsUtil.map((item) => {
          return(
            <div className="cardsProjects" key={item.title}>
              <img className="imgProjects" src={item.img} alt="sadsda"/>
              <h1>{item.title}
                <br></br>
                <span className="fontWeight">{item.subtitle}</span>
              </h1>
            </div>
          )
        })}
      </div>
    </ContainerProjects>
  );
}
