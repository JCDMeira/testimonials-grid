import styled from 'styled-components';

export const Fieldcard = styled.div`
  background: ${(props) => props.background};
  height: ${(props) => `${props.height}rem`};
  border-radius: 1rem;
  padding: 2.5rem 2.5rem 0rem 3.1rem;
  filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.25));
  margin-bottom: 2.4rem;
  overflow: auto;

  div {
    display: flex;
    position: inherit;
    z-index: 3;
    div {
      width: 32px;
      height: 32px;
      background: #a577e3;
      border-radius: 16px;
      margin-left: -0.1rem;
      margin-top: -0.1rem;

      position: inherit;
      z-index: 3;
      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        margin: 0.1rem 0.1rem;
      }
    }
  }
  h2 {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: ${(props) => props.color};
    margin-left: 1.5rem;
    position: inherit;
    z-index: 3;
    span {
      font-weight: 600;
      font-size: 11px;
      filter: opacity(50%);
      display: block;
    }
  }
  h1 {
    margin-top: 1.5rem;
    margin-left: 0.1rem;
    padding-right: 0.8rem;
    position: relative;
    z-index: inherit;
    color: ${(props) => props.colorTittle};
  }
  p {
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: ${(props) => props.color};
    filter: opacity(50%);
    margin-top: 1.7rem;
    padding-right: 2rem;
  }
`;

export const quota = styled.img`
  position: absolute;
  width: 10.4rem
  height: 10.2rem;
  /* left: 59.4666vw; */
  top: 0rem;
  right:0;
  margin-right: 2.4rem;

  z-index: 0;
`;
