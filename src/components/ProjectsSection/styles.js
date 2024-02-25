import styled from "styled-components";

 export const ContainerProjects = styled.div`
  background-color: #f0f0f3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  .animate__animated.animate__fadeInUp {
    --animate-duration: .5s;
  }

  > .textContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    padding-top: 130px;

    > span{
      font-weight: 200;
      font-size: 22px;
      font-style: italic;
      font-family: "Architects Daughter", cursive;
      color: #dc2751;
    }

    > h1{
      text-align: center;
      font-size: 48px;
      font-weight: 800;
      line-height: 80px;
      color: #1b1b1b;

      @media (max-width: 450px){
        font-size: 36px;
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
    padding: 0px 20px;
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
          filter: grayscale(0) opacity(100%) brightness(.6);
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
        text-align: center;
        line-height: 25px;
        position: absolute;
        opacity: 0;
        color: white;
        transition: all 0.4s;
      }
    
      .fontWeight{
        font-size: 22px;
        font-style: italic;
        font-family: "Architects Daughter", cursive;
        color: rgb(220, 39, 81);
        font-weight: 600;
      }
    }
  }

`;
