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
      font-size: ${(props) => (props.size ? `${props.size}px` : '24px')};
      line-height: 29px;
    `}
`;
export const P = styled.p`
  color: white;
  font-size: ${(props) => (props.size ? `${props.size}px` : '16px')};
`;
