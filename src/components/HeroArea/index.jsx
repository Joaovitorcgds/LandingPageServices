import { Button } from "../Layouts/Button"
import { HeroAreaContainer } from "./style"

export function HeroArea(){
  return(
    <>
      <HeroAreaContainer>
        <div>

          <p>Soluções</p>
          <span className="subtitleHeroArea">Criativas</span>

          <span>Tenha uma Landing Page com alta conversão para seus serviços no Google e Instagram.</span>

          <Button margin="15px 0px 0px" ftsize={`clamp(.5rem, .7em + 1vw, 2em)`} bgcolor="#dc2751">Quero fazer minha Landing Page</Button>
        </div>
      </HeroAreaContainer>
    </>
  )
}