import styled from "styled-components";

export const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 3rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background: black;


`

//logo
export const TitleLogo = styled.h1`
font-size:1.5rem;
font-family: Federant, cursive;

background-image: linear-gradient(90deg, #F41B3B 0%, #1884F7 100%);

/* Segundo passo: apagar do fundo tudo que não estiver imediatamente atrás de texto */
background-clip: text;
-webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */

/* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
-webkit-text-fill-color: transparent;

/* Cor que contraste com o degradê, caso o navegador não suporte background-clip: text */
color: black;

`

//seach
export const ContainerSeach = styled.div<{ border?: boolean}>`
display: flex;
align-items: center;
gap: 0.4rem;
border: ${ props => props.border ? 'solid 1px white' : 'none'}
`

export const SeachIconLupa = styled.div`
display: flex;
align-items: center;
padding-left: 7px;
text-align: center;
cursor: pointer;
`

export const InputSeach = styled.input<{ display?: boolean}>`
background: black;
border: none;
caret-color: white;
color: white;
display: ${ props => props.display ? 'block' : 'none'};

::placeholder {
  color: #807E81;
}

:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
`
