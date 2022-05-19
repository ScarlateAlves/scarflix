import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`
export const ContainerImage = styled.div`
  position: absolute;
  top: 260px;
  bottom: 32px;
  left: 0;
  right: 7px;
  display: flex;
  background-color: #323232;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: 0 0px 10px 10px;
  opacity: 0;
  visibility: hidden;
`

export const Item = styled.div`
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
  margin-bottom: 2.5rem;

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
  margin: 2rem 0;
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

