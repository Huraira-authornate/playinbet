import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  ${(props) =>
    props.capatilazie &&
    css`
      text-transform: uppercase;
    `}
  ${(props) =>
    props.sidebar &&
    css`
      text-transform: uppercase;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    `}
    ${(props) =>
    props.Bets &&
    css`
      font-weight: 500;
      font-size: 26px;
      line-height: 31px;
    `}
`;
export const P = styled.p`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
`;
export const H2 = styled.h2`
  font-size: ${(props) => (props.font ? props.font : '16px')};
  color: white;
  ${(props) =>
    props.feature &&
    css`
      font-style: normal;
      font-weight: 700;

      line-height: 25px;
      color: rgba(255, 255, 255, 0.6);
    `}
`;
export const H3 = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.6);
  ${(props) =>
    props.green &&
    css`
      color: #cef458;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    `}
`;
