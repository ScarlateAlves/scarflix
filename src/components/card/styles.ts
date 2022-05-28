import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`
export const ContainerImage = styled.div`
  position: absolute;
  top: 260px;
  bottom: 32px;
  width: 98.6%;
  display: flex;
  background-color: #323232;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: 0 0px 10px 10px;
  opacity: 0;
  visibility: hidden;
`

export const Item = styled.div<{marginBottom?: string}>`
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
  margin-bottom: ${ props => props.marginBottom ?? '2.5rem'};
  cursor: pointer;
  &:focus, &:hover {
    transform: scale(1.4);
    z-index: 1;
  }

  &:hover ${ContainerImage} {
    visibility: visible;
    opacity: 1;
  }
`

export const Imagem = styled.img`
  margin: 2rem 3px;
  border-radius: 10px;
`

export const CartStyles = styled.button`
  background-color: white;
  margin: 0;
  padding: 1px;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  display: flex;
`

