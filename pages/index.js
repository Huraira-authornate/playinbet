import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import {
  BoxHome,
  BoxHomeWrapper,
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
const menu = [
  { text: 'Featured' },
  {
    text: 'Your Bets',
  },
  {
    text: 'Custom bets',
  },
];
const teams = [
  {
    winer: 'MINTOSA',
    tm: 'Wild',
    score: '14-1',
    looser: 'Monterial',
    tm2: 'Canadial',
    score2: '14-1',
  },
  {
    winer: 'MINTOSA',
    tm: 'Wild',
    score: '14-1',
    looser: 'Monterial',
    tm2: 'Canadial',
    score2: '14-1',
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
          <Box width={'60%'} title='hello' menu={menu}>
            <BoxHomeWrapper>
              <BoxHome>
                <InputBox width='40%'>
                  <H1>Heloo</H1>
                  <H1>Heloo</H1>
                </InputBox>
                <InputBox width='40%'>
                  <H1>Heloo</H1>
                  <H1>Heloo</H1>
                </InputBox>
              </BoxHome>
              <Spacer />
              <hr />
              {teams.map((item, index) => {
                return (
                  <div key={index}>
                    <Spacer />
                    <MainHome style={{ marginBottom: '30px' }}>
                      <div>
                        <H1>
                          {item.winer}
                          <span
                            style={{
                              marginLeft: '10px',
                              fontStyle: 'italic',
                              fontWeight: '200',
                            }}
                          >
                            {item.tm}
                          </span>
                        </H1>
                        <P>{item.score}</P>
                      </div>
                      <InputBox>hello</InputBox>
                    </MainHome>
                    <MainHome style={{ marginBottom: '30px' }}>
                      <div>
                        <H1>
                          {item.looser}
                          <span
                            style={{
                              marginLeft: '10px',
                              fontStyle: 'italic',
                              fontWeight: '200',
                            }}
                          >
                            {item.tm2}
                          </span>
                        </H1>
                        <P>{item.score2}</P>
                      </div>
                      <InputBox>hello</InputBox>
                    </MainHome>
                    <hr />
                  </div>
                );
              })}
            </BoxHomeWrapper>
          </Box>
          <Box width={'20%'} height={'100%'} title='hello'>
            <CardBox
              chat='11'
              discription='is watching the game'
              number='48'
              percentage='💒 Marry me tommy!'
              name='Kinera'
              points='20'
              time='12'
            />

            <hr />
            <Spacer />

            <CardBox
              chat='11'
              discription='is watching the game'
              number='48'
              percentage='💒 Marry me tommy!'
              name='Kinera'
              points='20'
              time='12'
            />
          </Box>
          {/* <InputBox width='60%'>
            <H1>Heloo</H1>
            <H1>Heloo</H1>
          </InputBox>
          <InputBox>
            <H1>Heloo</H1>
            <H1>Heloo</H1>
          </InputBox> */}
        </MainHome>
      </Container>
    </Wrapper>
  );
}
