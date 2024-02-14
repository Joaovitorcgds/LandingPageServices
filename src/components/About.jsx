import styled from "styled-components";
import { Card } from "./Layouts/Card";
import imgabout from "../assets/imgAbout2.png"

export function About(){
  return(
    <>
      <Container>
        <TitleAbout>
          <TextAuxFirstSection>O que é</TextAuxFirstSection>
          <TextPrincFirstSection>Landing Page</TextPrincFirstSection>
          <Line></Line>
        </TitleAbout>

        <div>
          <Card>
            <img src={imgabout} alt="iconAsk" width={80} style={{"marginBottom": "15px"}}/>
            <h1 style={{"fontSize": "32px", "fontWeight": "600", "marginBottom": "15px"}}>Landing Page</h1>
            <span style={{"fontSize":"14px"}}>É uma página da web projetada para receber visitantes específicos, geralmente direcionados por meio de anúncios, campanhas de marketing ou links.</span>
          </Card>
        </div>
      </Container>

     
    </>
  )
}

const Container = styled.section`
  /* position: relative; */
  /* top: 95vh; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TitleAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const TextAuxFirstSection = styled.span`
  font-weight: 200;
  font-size: 24px;
  font-style: italic;
  font-family: "Architects Daughter", cursive;
  color: #dc2751;
`

const TextPrincFirstSection = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 90px;
  color: #1b1b1b;
`
const Line = styled.div`
  width: 80px;
  border-top: 3px solid #dc2751 !important;
  opacity: 1;
  margin-top: 15px;
`