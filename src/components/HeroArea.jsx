import styled from "styled-components"
import imgHeaderDesktop from "../assets/img-header-desktop3.jpeg"
import { Button } from "./Layouts/Button"

export function Header(){
  return(
    <>
      <Container>
        <ContentHeader>

          <TextHeaderTwo>
            <TextHeaderOne>Soluções</TextHeaderOne><br></br>
            Criativas
          </TextHeaderTwo>

          <TextAuxHeader>Tenha uma Landing Page com alta conversão para seus serviços no Google e Instagram.</TextAuxHeader>

          <Button margin="15px 0px 0px" ftsize={`clamp(.5rem, .7em + 1vw, 2em)`} bgcolor="#dc2751">Quero fazer minha Landing Page</Button>
        </ContentHeader>
      </Container>
    </>
  )
}

const Container = styled.section`
  background-image: url(${imgHeaderDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
`
const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const TextHeaderOne = styled.span`
  font-size: 60px;
  line-height: 1.2rem;
  animation-delay: .4s;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  opacity: .8;

  @media (min-width: 950px) {
    font-size: 135px;
  }
  @media (max-width: 475px){
    font-size: 40px;
  }
`
const TextHeaderTwo = styled.span`
  text-align: center;
  font-size: 80px;
  line-height: 100px;
  letter-spacing: 3px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 15px;
  animation-delay: .4s;

  @media (min-width: 950px) {
    font-size: 155px;
    line-height: 170px;
  }
  @media (max-width: 475px){
    line-height: 60px;
    font-size: 50px;
  }
`
const TextAuxHeader = styled.span`
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  font-weight: 500; 
  color: #fff;
  margin: 0px 25px;
`