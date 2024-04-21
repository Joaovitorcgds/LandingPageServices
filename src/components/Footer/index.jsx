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
          <h1>Lates Solutions</h1>
          <span>Conheça mais sobre a Lates e suas soluções através de suas redes socias.</span>
          <div className="containerCircleMedia">
            <a href="https://api.whatsapp.com/send?phone=5521975875130&text=Quero%20dar%20o%20primeiro%20passo%20para%20construir%20a%20identidade%20digital%20da%20minha%20empresa." target="_blank" className="circleMedia" aria-label="WhatsApp de João Developer">
              <WhatsappLogo size={25} />
            </a>
            <a href="https://www.instagram.com/joaovitorcgds/" target="_blank"className="circleMedia" aria-label="Instagram de João Developer"> 
              <InstagramLogo size={25} />
            </a>
            <a href="https://www.linkedin.com/in/joaovitorcgds/" target="_blank" className="circleMedia" aria-label="LinkedIn de João Developer">
              <LinkedinLogo size={25} />
            </a>

          </div>
        </div>
        <div className="fastLinks">
          <h1>Acesso Rápido</h1>
          <nav className="navLink">
            {navItens.map((item) => {
              return(
                <a href={item.navigate} key={item.name} aria-label={`Redirecionar para seção de ${item.name}`}>
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
          <a href="mailto:joaovitorcgds@gmail.com?subject=Quero desenvolver meu futuro digital&cc=joaovitorcgds@gmail.com&body=Quero dar o primeiro passo para construir a identidade digital da minha empresa." aria-label="Enviar email">joaovitorcgds@gmail.com</a>
        </div>
        <div className="agradecimentos">
          <h1>Nota de Agradecimento</h1>
          <p>Obrigado por chegar até o final da página, se ficou com alguma dúvida não deixe de entrar em contato. O futuro da sua empresa só depende do seu primeiro passo.</p>
        </div>
      </div>
      <div className="bottom">
        <span>Desenvolvido por Lates Solutions</span>
      </div>
    </FooterContainer>
  )
 }