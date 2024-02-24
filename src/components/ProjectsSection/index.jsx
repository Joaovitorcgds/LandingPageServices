import { ContainerProjects } from "./styles.js";
import { ProjectsUtil } from "../../util/ProjectsUtil.js";
import 'animate.css';


export function Projects() {
  return (
    <ContainerProjects>
      <div className="animate__animated animate__fadeInUp textContainer">
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
