import styled from "styled-components";

export const ContainerGeneros = styled.div`
position: fixed;
margin-top: 3rem;
display: flex;
gap: 4rem;
align-items: center;
z-index: 1;
background-color: black;
width: 100%;
padding: 1rem 0;
`

export const ContaineButton = styled.div`
position: relative;
`

export const ModalGeneros = styled.div<{
  visible: boolean 
}>`
border: solid 0.5px hsl(0, 0%, 40%);
background: black;
position: absolute;
padding: 1rem;
top: 45px;
left: 0;
width: 600px;
height: 150px;
border-radius: 10px;
display: ${({ visible }) => visible ? 'initial' : 'none'};
`
