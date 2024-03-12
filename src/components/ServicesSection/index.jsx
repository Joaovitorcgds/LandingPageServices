import styled from "styled-components";
import { ContainerServices } from "./style.js";
import { Card } from "../Layouts/Card.jsx";
import { servicesUtil } from "../../util/ServicesUtil.jsx";

export function Services(){
  return(
    <>
      <ContainerServices>
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
