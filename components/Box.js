import styled from 'styled-components';
import { Wrapper } from './Styles';
import { H1, H2 } from './TypoGraphy';
import { Image } from './Image';

const BoxWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background: #1b1a1a;
  border-radius: 20px;
`;

const Boxtitle = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Boxmenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Box({ children, title, menu, width, height }) {
  return (
    <BoxWrapper width={width} height={height}>
      <Boxtitle>
        <H1 left Bets capatilazie>
          {title}
        </H1>
        {menu && (
          <Boxmenu>
            {menu.map((item, index) => {
              return (
                <H2 feature style={{ marginRight: '20px' }} key={index}>
                  {item.text}
                </H2>
              );
            })}
          </Boxmenu>
        )}
      </Boxtitle>
      <Image width={'100%'} src={'/assets/mainbar.png'} />
      {children}
    </BoxWrapper>
  );
}
