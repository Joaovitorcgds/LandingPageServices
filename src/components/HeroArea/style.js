import styled from "styled-components"
import imgHeaderDesktop from "../../assets/img-header-desktop2.webp"
import heroareaMobile from "../../assets/heroareaMobile.webp"

export const HeroAreaContainer = styled.section`
  background-image: url(${imgHeaderDesktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px){
    background-image: url(${heroareaMobile});
  }

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
  
    > h1{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 45px;
      font-size: 65px;
      line-height: 4rem;
      animation-delay: .4s;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      opacity: .8;

      @media (min-width: 950px) {
        font-size: 105px;
        line-height: 135px
      }
      @media (max-width: 475px){
        font-size: 45px;
      }
      
      > .subtitleHeroArea{
        text-align: center;
        font-size: 80px;
        line-height: 100px;
        letter-spacing: 3px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 15px;
        animation-delay: .4s;

        @media (min-width: 950px) {
          font-size: 125px;
          line-height: 145px;
        }
        @media (max-width: 475px){
          line-height: 60px;
          font-size: 50px;
        }
      }
    }


    > p{
      text-align: center;
      font-size: 18px;
      line-height: 25px;
      font-weight: 500; 
      color: #fff;

      @media (max-width: 475px){
        font-size: 14px;
        max-width: 80%;
      }
    }

    > .btnHeroArea{
      text-decoration: none;
      margin-top: 45px;
      padding: 15px 30px;
      color: white;
      font-weight: 800;
      font-size: clamp(.5rem, .7em + 1vw, 2em);
      border: 2px solid #dc2751;
      border-radius: 80px;
      background-color:#dc2751;
      transition: all .4s;

      &:hover{
        cursor: pointer;
        background-color: #dc2751;
      }

      @media (max-width: 475px){
        font-size: 14px;
      }

      @media (max-width: 340px){
        font-size: 12px;
      }
    }
  }
`