import styled from "styled-components";
import imgBgContact from "../../assets/imgBgContact.webp"
import imgBgContactMobile from "../../assets/imgBgContactMobile.webp"

export const ContactContainer = styled.section`
  background-image: url(${imgBgContact});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 650px){
    background-image: url(${imgBgContactMobile});
    background-attachment: initial;
    background-position: right;
  }

  > .textContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    width: 0;
    white-space: nowrap;
    overflow-x: hidden;
    transition: all steps(30) 1s normal both;
    opacity: 0;

    > span{
      font-weight: 200;
      font-size: 22px;
      font-style: italic;
      font-family: "Madimi One", sans-serif;
      color: #dc2751;
      margin-bottom: 15px;

      @media (max-width: 450px){
        font-size: 20px;
        line-height: 30px;
      }
      @media (max-width: 380px){
          font-size: 18px;
        }
    }

    > h1{
      text-align: center;
      font-size: 65px;
      font-weight: 800;
      line-height: 80px;
      color: #fff;

      > span{
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 65px;
        line-height: 4rem;
        animation-delay: .4s;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        opacity: .8;

        @media (max-width: 650px){
          font-size: 40px;
          line-height: 30px;
        }
        @media (max-width: 380px){
          font-size: 32px;
        }
      }

      @media (max-width: 650px){
        font-size: 40px;
        line-height: 30px;
      }
      @media (max-width: 380px){
        font-size: 32px;
      }
    }

    > .line{
      width: 80px;
      border-top: 3px solid #dc2751;
      opacity: 1;
      margin-top: 15px;
    }
  }
  > .btnHeroArea{
      text-decoration: none;
      margin-top: 45px;
      padding: 15px 30px;
      color: white;
      font-weight: 600;
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
`