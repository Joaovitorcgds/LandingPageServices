import styled from "styled-components";

export const ContainerServices = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 130px 0px;

  > .containerTextServices{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

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
        font-size: 40px;
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
    padding: 0px 20px;
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


