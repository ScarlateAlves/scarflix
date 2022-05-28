import styled from "styled-components";

export const BoxLink = styled.div`
display: flex;
align-items: center;
gap: 3px;
color: #807E81;
cursor: pointer;

&:hover {
    color: white
  }

  svg {
    &:hover {
      & > * {
            fill: white;
          }
    }
    :last-child {
    }
    :first-child {
    

    }
  }


`