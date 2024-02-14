import { styled } from "styled-components"

export function Card({children}){
  return(
      <Container>{children}</Container>
  )
}

const Container = styled.div`
  width: 296px;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 75px 30px 15px 30px;
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
`