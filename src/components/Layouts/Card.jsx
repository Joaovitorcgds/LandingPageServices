import { styled } from "styled-components"

export function Card({children}){
  return(
      <Container>{children}</Container>
  )
}

const Container = styled.div`
  width: 286px;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 35px 20px 15px 20px;
  overflow: hidden;
  background-color: #f0f0f3;
  border-radius: 10px;
  border: none;
  transition: 0.7s;
  color: #1b1b1b;

  
  &:hover{
    background-color: #dc2751;
    color: white;
  }

  path {
    fill: #1b1b1b; 
    stroke: none;
    transition: fill 0.7s;
  }
  &:hover{
    path {
      fill: white;
    }
  }

`