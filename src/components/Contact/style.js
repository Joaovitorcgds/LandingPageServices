import styled from "styled-components";
import imgBgContact from "../../assets/imgBgContact.jpeg"

export const ContactContainer = styled.section`
  background-image: url(${imgBgContact});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
    }

    > h1{
      text-align: center;
      font-size: 65px;
      font-weight: 800;
      line-height: 80px;
      color: #fff;

      > span{
        font-size: 65px;
        line-height: 4rem;
        animation-delay: .4s;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        opacity: .8;

        @media (max-width: 450px){
          font-size: 32px;
          line-height: 30px;
        }
      }

      @media (max-width: 450px){
        font-size: 32px;
        line-height: 30px;
      }
    }

    > .line{
      width: 80px;
      border-top: 3px solid #dc2751;
      opacity: 1;
      margin-top: 15px;
    }
  }
`