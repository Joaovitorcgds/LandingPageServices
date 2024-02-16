import styled from "styled-components";
import { Card } from "./Layouts/Card";
import { servicesUtil } from "./util/ServicesUtil";

export function Services(){
  return(
    <>
      <Container>
        <TitleAbout>
          <TextAuxFirstSection>O que fazemos</TextAuxFirstSection>
          <TextPrincFirstSection>Nossos Serviços</TextPrincFirstSection>
          <Line></Line>
        </TitleAbout>

        <div style={{"display": "flex", "flexWrap": "wrap", "gap": "40px", "padding": "0px 20px", "justifyContent": "center"}}>
          {servicesUtil.map((item) => {
            return(
              <Card key={item.title}>
                {item.path(ImgSVG)}
                <h1 style={{"fontSize": "32px", "fontWeight": "600", "marginBottom": "15px"}}>{item.title}</h1>
                <span style={{"fontSize":"14px"}}>{item.subTitle}</span>
              </Card>
            )
          })}
        </div>
      </Container>
    </>
  )
}

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 130px 0px;
`
const ImgSVG = styled.svg`
  width: 90px;
  height: 100px;
  margin-bottom: 16px;
`
const TitleAbout = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`
const TextAuxFirstSection = styled.span`
  font-weight: 200;
  font-size: 22px;
  font-style: italic;
  font-family: "Architects Daughter", cursive;
  color: #dc2751;
`
const TextPrincFirstSection = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 90px;
  color: #1b1b1b;

  @media (max-width: 450px){
    font-size: 40px;
    line-height: 80px;
  }
`
const Line = styled.div`
  width: 80px;
  border-top: 3px solid #dc2751 !important;
  opacity: 1;
  margin-top: 15px;
`