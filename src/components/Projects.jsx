import styled from "styled-components"

export function Projects(){
  return(
    <Container>
      <TitleAbout>
        <TextAuxFirstSection>O que é</TextAuxFirstSection>
        <TextPrincFirstSection>Landing Page</TextPrincFirstSection>
        <Line></Line>
      </TitleAbout>

    </Container>
  )
}

const Container = styled.div`
  background-color: #f0f0f3;
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