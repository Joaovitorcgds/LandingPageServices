import styled from "styled-components"

export function ButtonToggleFAQ({children, onclick, className}){
  return(
    <BtnFAQ onClick={() => onclick} className={className}>
      {children}
    </BtnFAQ>
  )
}

const BtnFAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid #dc2751;
  border-radius: 10px;
  padding: 25px 15px;
  color: #1b1b1b;

  &:hover{
    background-color: #f0f0f3;
    cursor: pointer;
  }
`