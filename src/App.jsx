import { HeroArea } from "./components/HeroArea/"
import { Header } from "./components/Header"
import { Services } from "./components/ServicesSection"
import { Projects } from "./components/ProjectsSection"
import { Doubts } from "./components/Doubts"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"

function App() {
  return (
    <>
      <Header/>
      <HeroArea/>
      <Services/>
      <Projects/>
      <Doubts/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
