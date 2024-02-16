import styled from "styled-components";
import { ProjectsUtil } from "./util/ProjectsUtil";
// import imgProject1 from "../assets/imgProject.jpg";
// import imgProject2 from "../assets/imgProject2.jpg";

export function Projects() {
  return (
    <Container>
      <TitleAbout>
        <TextAuxFirstSection>Projetos & Portfólio</TextAuxFirstSection>
        <TextPrincFirstSection>Trabalhos Realizados</TextPrincFirstSection>
        <Line />
      </TitleAbout>

      <div style={{"display": "flex", "flexWrap": "wrap", "gap": "40px", "padding": "0px 20px", "justifyContent": "center"}}>
        {ProjectsUtil.map((item) => {
          return(
            <CardsProjects key={item.title}>
              <ImgsProjects src={item.img} alt="sadsda"/>
              <TextCardProjects>{item.title}
                <br></br>
                <TextAuxFirstSection>{item.subtitle}</TextAuxFirstSection>
              </TextCardProjects>
            </CardsProjects>
          )
        })}
      </div>
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
const CardsProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 346px;
  height: 430px;
  cursor: pointer;
  transition: all .7s;

  &:hover{
    transform: scale(.95);

    img{
      filter: grayscale(0) opacity(100%) brightness(.6);
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
  border-radius: 10px;
  width: 100%;
  height: 100%;
  filter: grayscale(1) opacity(75%);
  transition: all 0.4s;
`;
const TextCardProjects = styled.h1`
  text-align: center;
  line-height: 25px;
  position: absolute;
  opacity: 0;
  color: white;
  transition: all 0.4s;
`;
