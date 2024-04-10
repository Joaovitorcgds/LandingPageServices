import { ContainerDoubts } from "./style";
import { useState } from "react";
import { ButtonToggleFAQ } from "../Layouts/ButtonToggleFAQ";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export function Doubts(){
  const [expanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".textContainer", {
      opacity: 1,
      width: "auto",
      scrollTrigger: {
        trigger: "#sectionDoubts",
        start: "top 400px"
      }
    })

    return () => { gsap.killTweensOf(".textContainer")}
  },[])

  function toggleFAQ(i){
    setExpanded(!expanded)
    
    var btnList = document.querySelectorAll(".btnFAQ");
    var answer = btnList[i].childNodes[1];
    var element = answer.classList;

    if(element[1] == "expanded"){
      answer.classList.remove("expanded")
    } else{
      answer.classList.add("expanded")
    }
  }

  const doubtsList = [
    {
      question: "Qual é a diferença entre uma landing page e um site institucional e como essa diferença impacta nas estratégias de marketing digital?",
      answer: "Uma landing page é uma página da web focada em uma oferta específica, como um produto, serviço ou promoção. Ela tem um objetivo claro, como capturar leads ou incentivar ações específicas dos visitantes, como preencher um formulário ou fazer uma compra. Por outro lado, um site institucional é mais abrangente, apresentando informações sobre a empresa, seus produtos/serviços, histórico, equipe, entre outros detalhes. A diferença principal está na função e no foco: a landing page é projetada para uma conversão direta e imediata, enquanto o site institucional tem uma abordagem mais ampla para apresentar a empresa de forma geral. Para estratégias de marketing digital, a landing page é ideal para campanhas de publicidade online, e-mail marketing ou eventos específicos, pois direciona os visitantes para uma ação específica, aumentando as taxas de conversão. Já o site institucional é crucial para estabelecer a credibilidade da marca, fornecer informações detalhadas aos clientes em potencial e consolidar a presença online da empresa, contribuindo para a construção de relacionamentos a longo prazo."
    },
    {
      question: "Como essa diferença impacta nas estratégias de marketing digital?",
      answer: "Para estratégias de marketing digital, a landing page é ideal para campanhas de publicidade online, e-mail marketing ou eventos específicos, pois direciona os visitantes para uma ação específica, aumentando as taxas de conversão. Já o site institucional é crucial para estabelecer a credibilidade da marca, fornecer informações detalhadas aos clientes em potencial e consolidar a presença online da empresa, contribuindo para a construção de relacionamentos a longo prazo."
    },
    {
      question: "Como um site pode realmente ajudar a aumentar as vendas da minha empresa?",
      answer: "Um site não é apenas uma presença online, é sua vitrine digital para o mundo. Com um design atrativo e funcionalidades estratégicas, podemos atrair mais clientes, gerar leads qualificados e facilitar o processo de compra. Isso resulta em um aumento significativo nas vendas e nas receitas da sua empresa, transformando visitantes em clientes satisfeitos."
    },
    {
      question: "Como você garantirá que o design do site reflita verdadeiramente a identidade da minha marca?",
      answer: "Nossa equipe especializada trabalha em estreita colaboração com você para entender a essência da sua marca, seus valores e sua visão. Ao combinar isso com nossa experiência em design e branding, garantimos que seu site seja uma representação autêntica da sua marca, transmitindo confiança e gerando conexões emocionais com seus clientes."
    },
    {
      question: "Como você garantirá que meu site seja otimizado para mecanismos de busca (SEO)?",
      answer: "Nossa abordagem inclui uma pesquisa abrangente de palavras-chave relevantes para o seu setor, otimização técnica do site e criação de conteúdo estratégico. Isso resulta em uma melhor visibilidade nos mecanismos de busca, aumento do tráfego orgânico e mais oportunidades de conversão para sua empresa, gerando um ROI tangível a longo prazo."
    },
    {
      question: "Quanto tempo levará para o site estar pronto e funcionando?",
      answer: "Entendemos a importância da agilidade no mercado atual. Nosso processo eficiente de desenvolvimento nos permite entregar um site de qualidade dentro de prazos realistas e acordados. Isso significa que seu site estará pronto e funcionando rapidamente, permitindo que você aproveite as oportunidades online o mais breve possível."
    },{
      question: "Como será o suporte após o lançamento do site?",
      answer: "Nosso compromisso vai além do lançamento do site. Oferecemos suporte contínuo, incluindo atualizações de segurança, monitoramento de desempenho e assistência para novas implementações. Você terá a tranquilidade de saber que seu site está sempre otimizado e pronto para atender às demandas do seu negócio em constante evolução."
    },
    {
      question: "Qual será o retorno do investimento (ROI) ao desenvolver um site para minha empresa?",
      answer: "Nossos projetos são focados em resultados mensuráveis. Com um site bem projetado, otimizado e alinhado com sua estratégia de negócios, você pode esperar um retorno substancial sobre o investimento. Aumento nas vendas, redução de custos operacionais e maior visibilidade da marca são apenas alguns dos benefícios que contribuem para um ROI positivo e sustentável.."
    }
  ]
  
  return(
    <ContainerDoubts id="sectionDoubts">
      <div className="textContainer">
        <span>Perguntas frequentes</span>
        <h1>Principais dúvidas</h1>
        <div className="line"></div>
      </div>

      <div className="containerFAQ">
        {doubtsList.map((doubt, i) => {
          return(
            <ButtonToggleFAQ onclick={() => toggleFAQ(i)} key={i}
            className={`btnFAQ ${i}`}>
              <span className="questionFAQ">{doubt.question}</span>
              <span className={` answerFAQ `}>{doubt.answer}</span>
            </ButtonToggleFAQ>
          )
        })}
      </div>
    </ContainerDoubts>
  )
}