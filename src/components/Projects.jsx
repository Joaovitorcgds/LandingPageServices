import styled from "styled-components";
import imgProject1 from "../assets/home-3.jpg";

export function Projects() {
  return (
    <Container>
      <TitleAbout>
        <TextAuxFirstSection>Projetos & Portfólio</TextAuxFirstSection>
        <TextPrincFirstSection>Trabalhos Realizados</TextPrincFirstSection>
        <Line />
      </TitleAbout>

      <ImgsProjectsContainer>
        <ImgsProjects src={imgProject1} alt="sadsda"/>
        <TextCardProjects>hello world</TextCardProjects>
      </ImgsProjectsContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f0f0f3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 130px;
`;
const TextAuxFirstSection = styled.span`
  font-weight: 200;
  font-size: 22px;
  font-style: italic;
  font-family: "Architects Daughter", cursive;
  color: #dc2751;
`;
const TextPrincFirstSection = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 80px;
  color: #1b1b1b;
`;
const Line = styled.div`
  width: 80px;
  border-top: 3px solid #dc2751;
  opacity: 1;
  margin-top: 15px;
`;
const ImgsProjectsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 346px;
  height: 430px;
  overflow: hidden;
  cursor: pointer;
  z-index:3;

  &:hover{
    img{
      filter: grayscale(0) opacity(100%) brightness(.5);
    }

    h1{
      opacity:1;
    }
  }
`;

const ImgsProjects = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  filter: grayscale(1) opacity(75%);
  transition: all 0.4s;
`;

const TextCardProjects = styled.h1`
  position: absolute;
  opacity: 0;
  color: white;
  transition: all 0.4s;
`;
