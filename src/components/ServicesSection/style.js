import styled from "styled-components";

export const ContainerServices = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;

  > .containerTextServices{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    width: 0;
    white-space: nowrap;
    overflow-x: hidden;
    transition: all steps(30) 1s normal both;
    opacity: 0;

    > span{
      font-weight: 200;
      font-size: 22px;
      font-style: italic;
      font-family: "Architects Daughter", cursive;
      color: #dc2751;
    }

    > h1{
      font-size: 48px;
      font-weight: 800;
      line-height: 90px;
      color: #1b1b1b;

      @media (max-width: 450px){
        font-size: 36px;
        line-height: 80px;
      }
    }

    .line{
      width: 80px;
      border-top: 3px solid #dc2751 !important;
      opacity: 1;
      margin-top: 15px;
    }
  }

  .containerCardServices{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    .titleCard{
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 15px;
    }

   .subtitleCard{
    font-size: 14px;
   }
  }
`


