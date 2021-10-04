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

  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  width: 87.2%;
  height: 1873px;
  padding: 2.4rem 0;

  @media (min-width: 1200px) {
    width: 120rem;
    height: 72rem;
    padding: 7.4rem 4.5rem 2.5rem 4.5rem;
    display: grid;
    gap: 0 3.3rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'card1 card1 card2 card5'
      'card3 card4 card4 card5';
  }
`;
