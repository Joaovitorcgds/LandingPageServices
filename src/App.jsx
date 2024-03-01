import { HeroArea } from "./components/HeroArea/"
import { Header } from "./components/Header"
import { Services } from "./components/ServicesSection"
import { Projects } from "./components/ProjectsSection"
import { Doubts } from "./components/Doubts"

function App() {
  return (
    <>
      <Header/>
      <HeroArea/>
      <Services/>
      <Projects/>
      <Doubts/>
    </>
  )
}

export default App
