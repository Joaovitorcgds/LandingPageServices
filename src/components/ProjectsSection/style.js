import styled from "styled-components";

 export const ContainerProjects = styled.div`
  background-color: #f0f0f3;
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
    overflow: hidden;
    transition: all steps(30) 1s normal both;
    opacity: 0;

    > span{
      font-weight: 200;
      font-size: 22px;
      font-style: italic;
      font-family: "Madimi One", sans-serif;
      color: #dc2751;
    }

    > h1{
      display: inline-block;
      text-align: center;
      font-size: 48px;
      font-weight: 800;
      line-height: 80px;
      color: #1b1b1b;

      @media (max-width: 650px){
        font-size: 30px;
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

  .cardContainer{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    .cardsProjects{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 346px;
      height: 430px;
      cursor: pointer;
      transition: all .7s;
  
      &:hover{
        transform: scale(.95);
  
        img{
          filter: grayscale(0) opacity(100%) brightness(.3);
        }
  
        h1{
          opacity:1;
        }
      }
      
      @media (max-width: 500px){
        height: 360px;
        width: 276px;
      }
  
      .imgProjects{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        filter: grayscale(1) opacity(75%);
        transition: all 0.4s;
      }
  
      > h1{
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        line-height: 25px;
        position: absolute;
        opacity: 0;
        color: white;
        transition: all 0.4s;
      }
    
      .fontWeight{
        font-size: 22px;
        line-height: 50px;
        font-family: "Madimi One", sans-serif;
        color: white;
        opacity: .8;
        font-weight: 400;
      }
    }
  }

`;
