import { ContactContainer } from "./style"
import { Button } from "../Layouts/Button"

export function Contact(){
  return(
    <>
      <ContactContainer>
        <div className="textContainer">
          <span>Desenvolvemos seu futuro digital</span>
          <h1><span>Vamos</span> Começar?</h1>
          <div className="line"></div>
        </div>


          <Button margin="15px 0px 0px" ftsize={`clamp(.5rem, .7em + 1vw, 2em)`} bgcolor="#dc2751">Quero fazer minha Landing Page</Button>
       
      </ContactContainer>
    </>
  )
}