import { HeroAreaContainer } from "./style"

export function HeroArea(){
  return(
    <HeroAreaContainer>
      <div>
        <h1>
          Soluções
          <span className="subtitleHeroArea">Criativas</span>
        </h1>

        <p>Desenvolva sua presença digital que irá impulsionar o sucesso de sua empresa.</p> 

        <a href="https://api.whatsapp.com/send?phone=5521993788710&text=Quero%20dar%20o%20primeiro%20passo%20para%20construir%20a%20identidade%20digital%20da%20minha%20empresa." className="btnHeroArea" aria-label="Butão para desenvolver Seu Perfil Digital" target="_blank">Explore Nossas soluçôes</a>
      </div> 
    </HeroAreaContainer>
  )
}