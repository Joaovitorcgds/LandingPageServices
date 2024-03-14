import styled from "styled-components";

export const ContainerDoubts = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;

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
      font-family: "Architects Daughter", cursive;
      color: #dc2751;
    }

    > h1{
      display: inline-block;
      text-align: center;
      font-size: 48px;
      font-weight: 800;
      line-height: 80px;
      color: #1b1b1b;

      @media (max-width: 450px){
        font-size: 32px;
        line-height: 50px;
      }
    }

    > .line{
      width: 80px;
      border-top: 3px solid #dc2751;
      opacity: 1;
      margin-top: 15px;
    }
  }

  > .containerFAQ{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    
    div .questionFAQ{
      font-weight: 600;
    }

    div .answerFAQ{
      height: 0;
      display: none;
      transition: all ease-in-out .5s;
      /* visibility: hidden; */
    }
    
    div .expanded{
      height: auto;
      display: block;
      transition: all ease-in-out .5s;
      word-wrap: break-word;  
    }
  }
`