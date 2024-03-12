import styled from "styled-components"
import imgHeaderDesktop from "../../assets/img-header-desktop2.jpeg"

export const HeroAreaContainer = styled.section`
  background-image: url(${imgHeaderDesktop});
  background-size: cover;
  background-repeat: no-repeat;
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
      text-align: center;
      font-size: 15px;
      line-height: 25px;
      font-weight: 500; 
      color: #fff;
      margin: 0px 25px;
    }
  }
`