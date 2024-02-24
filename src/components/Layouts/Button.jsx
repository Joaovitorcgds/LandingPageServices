import styled from "styled-components"

export function Button({children, bgcolor, margin, ftsize, toggleMenu}){
  return(
    <AllButton 
    $primary={bgcolor}  
    $margin={margin}
    $ftsize={ftsize}
    onClick={toggleMenu}
    > 
      {children}
    </AllButton>
  )
}


const AllButton = styled.button`
  margin: ${props => props.$margin || 0};
  padding: 15px 30px;
  color: white;
  font-weight: 800;
  font-size: ${props => props.$ftsize || "clamp(1rem, 1em + .1vw, 2em)"};
  border: 2px solid ${props => props.$primary ? "#dc2751" : "white"};
  border-radius: 80px;
  background-color: ${props => props.$primary || "#dc2751"};
  transition: all .4s;

  &:hover{
    cursor: pointer;
    background-color: #dc2751;
  }
`