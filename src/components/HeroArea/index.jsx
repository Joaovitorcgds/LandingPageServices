import { HeroAreaContainer } from "./style"

export function HeroArea(){
  return(
    <>
      <HeroAreaContainer>
        <div>
          <h1>
            Soluções
            <span className="subtitleHeroArea">Criativas</span>
          </h1>

         <p>Desenvolva sua presença digital e transforme suas ideias em soluções que irão impulsionar o sucesso de sua empresa.</p> 

          <a href="https://api.whatsapp.com/send?phone=5521975875130&text=Quero%20dar%20o%20primeiro%20passo%20para%20construir%20a%20identidade%20digital%20da%20minha%20empresa." className="btnHeroArea">Desenvolva Seu Futuro Digital</a>
        </div> 
       
      </HeroAreaContainer>
    </>
  )
}