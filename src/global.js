import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStye = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: 'Barlow Semi Condensed';
  }
}
`;

export const Conteiner = styled.div`
  width: 100%;
  height: 1966.71px;

  background: #ecf2f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 87.2%;
  height: 1873px;
  background: white;
  padding: 2.4rem 0;
`;
