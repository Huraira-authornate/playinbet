import styled from 'styled-components';
import { Wrapper } from './Styles';
import { H1 } from './TypoGraphy';

const BoxWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background: #1b1a1a;
  border-radius: 20px;
`;

const Boxtitle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Boxmenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Box({ children, title, menu, width, height }) {
  return (
    <BoxWrapper width={width} height={height}>
      <Boxtitle>
        <H1 capatilazie>{title}</H1>
        {menu && (
          <Boxmenu>
            {menu.map((item, index) => {
              return (
                <H1 style={{ marginRight: '20px' }} key={index}>
                  {item.text}
                </H1>
              );
            })}
          </Boxmenu>
        )}
      </Boxtitle>
      <hr />
      {children}
    </BoxWrapper>
  );
}
