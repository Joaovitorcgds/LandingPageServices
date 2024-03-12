import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: #101010;
  color: white;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  gap: 30px;
  justify-content: space-around;
  padding-top: 75px;
  padding-bottom: 50px;
  /* overflow-y: scroll; */

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
`