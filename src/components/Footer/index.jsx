import { FooterContainer } from "./style"
import { Dot, InstagramLogo, WhatsappLogo, LinkedinLogo } from "@phosphor-icons/react"

 export function Footer(){
  const navItens = [
    {
      name: "Home",
      navigate: "/" 
    },
    {
      name: "Serviços",
      navigate: "#sectionServices"
    },
    {
      name: "Projetos",
      navigate: "#sectionProjects"
    },
    {
      name: "Dúvidas",
      navigate: "#sectionDoubts"
    },
    {
      name:"Contato",
      navigate: "#sectionContact"
    }
  ]

  return(
    <FooterContainer>
      <div>
        <div className="aboutMe">
          <h1>João Developer</h1>
          <span>Conheça mais sobre o João e suas habilidades como desenvolvedor através de suas redes socias.</span>
          <div className="containerCircleMedia">
            <a href="https://www.instagram.com/joaovitorcgds/" target="_blank"className="circleMedia">
              <InstagramLogo size={25} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5521975875130&text=Quero%20dar%20o%20primeiro%20passo%20para%20construir%20a%20identidade%20digital%20da%20minha%20empresa." target="_blank" className="circleMedia">
              <WhatsappLogo size={25} />
            </a>
            <a href="https://www.linkedin.com/in/joaovitorcgds/" target="_blank" className="circleMedia">
              <LinkedinLogo size={25} />
            </a>

          </div>
        </div>
        <div className="fastLinks">
          <h1>Acesso Rápido</h1>
          <nav className="navLink">
            {navItens.map((item) => {
              return(
                <a href={item.navigate} key={item.name}>
                  <Dot color="#dc2751" size={42} />
                  {item.name}
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
      </div>
      <div className="bottom">
        <span>Desenvolvido por João Vitor Costa </span>
      </div>
    </FooterContainer>
  )
 }