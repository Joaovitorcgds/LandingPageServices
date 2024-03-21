import styled from "styled-components"
import imgHeaderDesktop from "../../assets/img-header-desktop2.jpeg"

export const HeroAreaContainer = styled.section`
  /* background-image: url(${imgHeaderDesktop});
  background-size: cover;
  background-repeat: no-repeat; */
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: block;

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

  
    > p{
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

    > span{
      max-width: 700px;
      text-align: center;
      font-size: 18px;
      line-height: 25px;
      font-weight: 500; 
      color: #fff;
      margin: 0px 25px;
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
    }
  }
`