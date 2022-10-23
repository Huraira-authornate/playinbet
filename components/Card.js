import styled from 'styled-components';
import { Image } from './Image';
import { P } from './TypoGraphy';
import { H1 } from './TypoGraphy';
const Card = styled.div`
    justify-content: center
  flex-direction: column;
  padding: 20px;
  width: 350px;
  height: auto;
`;
const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
`;
const CardIcon = styled.div`
  justify-content: space-between;
  margin:10px
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlignRight = styled.div`
display: flex; 
justify-content: space-between
`
export const BorderBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 300px;
height: 48px;
background: #262626;
border-radius: 100px;
opacity: 0.6
`;

export function CardBox({time,points,chat, name, percentage, number,discription}) {
  return (
    <Card>
      <CardHead>
      <Image
            width={'50px'}
            height='50px'
            src='/assets/profile.png'
            alt='profile-pic'
          />
        <AlignRight>
        <CardIcon> <P>{time}m</P> </CardIcon>
        <CardIcon> <P>{points}Points</P> </CardIcon>
        <CardIcon> <P>{chat} chats</P> </CardIcon>
        </AlignRight>
      </CardHead>
      <CardContent>
            <P> <H1 style={{fontSize:'22px'}}>@{name}</H1> Bet on the person</P>
            <P>{discription}</P>
      </CardContent>
      <BorderBox><P style={{fontSize:'18px'}}>{percentage}</P> <H1 style={{
        color:'#CEF458'
      }}>{number}</H1> </BorderBox>
    </Card>
  );
}
