import { FooterContainer } from "./style"
import { Dot } from "@phosphor-icons/react"

 export function Footer(){
  const navItens = [
    "Home",
    "Serviços",
    "Projetos",
    "Dúvidas",
    "Contato"
  ]

  return(
    <FooterContainer>
      <div className="aboutMe">
        <h1>João Developer</h1>
        <span>Conheça mais sobre o João e suas habilidades como desenvolvedor através de suas redes socias.</span>
      </div>
      <div className="fastLinks">
        <h1>Acesso Rápido</h1>
        <nav className="navLink">
          {navItens.map((item) => {
            return(
              <a href="#" key={item}>
                <Dot color="#dc2751" size={42} />
                {item}
              </a>
            )
          })}
        </nav>
      </div>
      <div className="infoContact">
        <h1>Informações Contato</h1>
        <span className="infoLocation">Rio de Janeiro, Brazil</span>
        <span>joaovitorcgds@gmail.com</span>
      </div>
      <div className="agradecimentos">
        <h1>Nota de Agradecimento</h1>
        <span>Obrigado por chegar até o final da página, se ficou com alguma dúvida não deixe de entrar em contato. O futuro da sua empresa só depende do seu primeiro passo.</span>
      </div>
    </FooterContainer>
  )
 }