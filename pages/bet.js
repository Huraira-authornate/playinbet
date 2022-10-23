import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import {
  BoxHome,
  BoxHomeWrapper,
  CenterItems,
  MainHome,
  Wrapper,
} from '../components/Styles';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { Sidebar } from '../components/Sidebar';
import Spacer from '../components/Spacer';
import { Box } from '../components/Box';
import { InputBox } from '../components/InputBox';
import { H1, P } from '../components/TypoGraphy';
import { CardBox } from '../components/Card';
import { BorderBox } from '../components/Card';
import { Button } from '../components/Button';

const menu = [
  { text: 'Featured' },
  {
    text: 'Your Bets',
  },
];
export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Spacer />
        <MainHome>
          <Sidebar />
          <Box width={'60%'} height={'100%'} title='Pick the event' menu={menu}>
            <CenterItems>
              <H1> YOUR BET IS SET !</H1>
              <Spacer />
              <BorderBox style={{ width: '62px', height: '62px' }}>
                 <H1>✔️</H1>
              </BorderBox>
              <Spacer />
              <H1>Add your wager and sumbit your bet for others to take</H1>
              <Spacer />
              <P style={{ color: '#BCFE01' }}>
                Money will only be taken out of your account if someone takes
                your bet.
              </P>
            </CenterItems>
          </Box>
          <Box width={'20%'} height={'100%'} title='Your BET'>
            <CenterItems>
            <H1 style={{ fontSize: '18px' }}>NHL: MONTREAL CANADIAL</H1>
            <Spacer />
            <H1 style={{ fontSize: '18px', opacity: 0.6 }}>
              Brendan Gallagher will have 1 Goal Scored in the 3rd Period.
            </H1>
            <Spacer />
            <BoxHome>
              <H1>WAGER</H1>
              <H1 style={{ color: '#CEF458' }}>60.00$</H1>
            </BoxHome>
            <Spacer />
            <BoxHome>
              <BorderBox>
                <P>$5</P>
              </BorderBox>{' '}
              <BorderBox>
                <P>$10</P>
              </BorderBox>{' '}
              <BorderBox>
                <P>$20</P>
              </BorderBox>{' '}
              <BorderBox>
                <P style={{ fontSize: '12px' }}>CUSTOM</P>
              </BorderBox>
            </BoxHome>
            <Spacer />
            <hr style={{ backgroundColor: '#CEF458' }} />
            <Spacer />
            <BorderBox ><P> Share with: Live group</P></BorderBox>
            <Spacer />
            <Button>Sumbit Bet</Button>
            </CenterItems>
          </Box>
        </MainHome>
      </Container>
    </Wrapper>
  );
}
