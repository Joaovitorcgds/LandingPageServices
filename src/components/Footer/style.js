import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: #101010;
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  /* overflow-y: scroll; */

  @media(max-width: 545px){
    padding-left: 20px;
  }

  > div:nth-child(1){
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    padding: 100px 20px;

    

    > .aboutMe{
      max-width: 250px;
      
      h1{
        font-size: 45px;
        line-height: 40px;
        margin-bottom: 30px;
      }
  
      span{
        color: #999 ;
      }

      .containerCircleMedia{
        display: flex;
        gap: 15px;
        margin-top: 30px;

        .circleMedia{
          color: white;
          border: #dc2751 3px solid;
          padding: 10px 10px 5px 10px;
          border-radius: 50%;
          transition: all ease-in-out .3s;
          
          &:hover{
            background-color: #dc2751;
            transform: translateY(-10px);
            cursor: pointer;
          }
        }
      }
    }
  
    > .fastLinks{
      display: flex;
      flex-direction: column;
      width: 250px;
  
      > h1{
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 10px;
      }
  
      > .navLink{
        display: flex;
        gap: 1px;
        flex-direction: column;
        transition: all .5s;
        margin: 20px 0px;
  
        :hover{
          color: #dc2751;
          cursor: pointer;
        }
        
        a{
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #999;
          transition: all .5s;
          font-weight: 600;
        }
      }
    }
  
    >.infoContact{
      max-width: 250px;
      display: flex;
      flex-direction: column;
      
      >h1{
        font-size: 28px;
      }
  
      .infoLocation{
        margin: 10px 0px;
        color: #999;
      }
  
      span:nth-child(3){
        display: inline-block;
        color: #999;
        border-bottom: 3px solid #dc2751 ;
        padding-bottom: 10px;
  
        &:hover{
          cursor: pointer;
        }
      }
    }
  
    >.agradecimentos{
      max-width: 250px;
  
      > h1{
        font-size: 28px;
        margin-bottom: 10px;
      }
  
      > span{
       margin: 20px 0px;
       line-height: 30px;
       color: #999;
      }
    }
  }

  > .bottom{
    border-top: #999 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    opacity: .8;
    height: 100px;
  }


`