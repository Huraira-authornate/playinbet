import styled from 'styled-components';
import { Wrapper } from './Styles';
import { H1 } from './TypoGraphy';

const BoxWrapper = styled.div`
  width: 50%;
  background-color: red;
  border-radius: 20px;
`;

const Boxtitle = styled.div``;
const Boxmenu = styled.div``;

export function Box({ children, title, menu }) {
  return (
    <BoxWrapper>
      <Boxtitle>
        {title}
        {menu && <Boxmenu>{}</Boxmenu>}
      </Boxtitle>
      {children}
    </BoxWrapper>
  );
}
