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
    max-width: 90%;
  
    > h1{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 45px;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 105px;
      line-height: 135px;
      animation-delay: .4s;
      color: transparent;
      -webkit-text-stroke: 1px #fff;
      opacity: .8;

      @media (max-width: 950px) {
        font-size: 85px;
        line-height: 105px;
      }
      @media (max-width: 475px){
        font-size: 70px;
      }
      @media (max-width: 380px){
        line-height: 70px;
        font-size: 60px;
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
          line-height: 70px;
          font-size: 70px;
        }
        @media (max-width: 380px){
          line-height: 75px;
          font-size: 60px;
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
        font-size: 16px;
        padding: 0px 10px;
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