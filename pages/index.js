import Head from 'next/head';
import { Image } from '../components/Image';
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
import { H1, H3, P, H2 } from '../components/TypoGraphy';
import { useState } from 'react';
import { HorizontalBar } from '../components/HorizintalBar';
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
const match = [
  {
    text: 'Monterial Candian',
  },
  {
    text: 'Minnisota wild',
  },
];

export default function Home() {
  const [bet, setBet] = useState(true);
  const [pick, setPick] = useState(false);
  const [team, setTeam] = useState(false);
  const [event, setEvent] = useState(false);
  const [frame, setFrame] = useState(false);
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Spacer />
        <MainHome>
          <Sidebar />

          {bet && (
            <Box width={'60%'} title='Bets' menu={menu}>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox width='48%'>
                    <H3>Bet type: Game winner</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/DOWN.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                  <InputBox width='48%'>
                    <H3>Create Bet</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/Union.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {/* <HorizontalBar  /> */}
                {teams.map((item, index) => {
                  return (
                    <div key={index}>
                      <Spacer />
                      <MainHome style={{ marginBottom: '30px' }}>
                        <div style={{ display: 'flex' }}>
                          <Image src='/assets/Rectangle.png' />
                          <div style={{ marginLeft: '40px' }}>
                            <H2 font={'20px'}>
                              {item.winer}
                              <span
                                style={{
                                  marginLeft: '8px',
                                  fontStyle: 'italic',
                                  fontWeight: '200',
                                }}
                              >
                                {item.tm}
                              </span>
                            </H2>
                            <P color={'rgba(255, 255, 255, 0.6)'}>
                              {item.score}
                            </P>
                          </div>
                        </div>
                        <InputBox>hello</InputBox>
                      </MainHome>
                      <MainHome style={{ marginBottom: '30px' }}>
                        <div style={{ display: 'flex' }}>
                          <Image src='/assets/Rectangle.png' />
                          <div style={{ marginLeft: '40px' }}>
                            <H2 font={'20px'}>
                              {item.looser}
                              <span
                                style={{
                                  marginLeft: '8px',
                                  fontStyle: 'italic',
                                  fontWeight: '200',
                                }}
                              >
                                {item.tm2}
                              </span>
                            </H2>
                            <P color={'rgba(255, 255, 255, 0.6)'}>
                              {item.score2}
                            </P>
                          </div>
                        </div>
                        <InputBox>hello</InputBox>
                      </MainHome>
                      <HorizontalBar />
                    </div>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {pick && (
            <Box width={'60%'} title='Pick the Player/Team'>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox width='48%'>
                    <H3>Search matchups</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/search.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                  <InputBox width='48%'>
                    <H3>Featured</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/DOWN.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {teams.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome style={{ marginBottom: '30px' }}>
                            <div>
                              <H2 font={'20px'}>
                                {item.winer}
                                <span
                                  style={{
                                    marginLeft: '8px',
                                    fontStyle: 'italic',
                                    fontWeight: '200',
                                  }}
                                >
                                  {item.tm}
                                </span>
                              </H2>
                            </div>
                            {/* <InputBox>hello</InputBox> */}
                          </MainHome>
                          <MainHome style={{ marginBottom: '30px' }}>
                            <div>
                              <H2 font={'20px'}>
                                {item.looser}
                                <span
                                  style={{
                                    marginLeft: '8px',
                                    fontStyle: 'italic',
                                    fontWeight: '200',
                                  }}
                                >
                                  {item.tm2}
                                </span>
                              </H2>
                            </div>
                          </MainHome>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                          <Image
                            width={'62px'}
                            height={'62px'}
                            src={'/assets/arrow.png'}
                            alt='arrow'
                          />
                        </div>
                      </MainHome>
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {team && (
            <Box width={'60%'} title='Pick the Player/Team'>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox width='48%'>
                    <H3>Search matchups</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/search.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                  <InputBox width='48%'>
                    <H3>Featured</H3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        // width={'16px'}
                        // height={'16px'}
                        src='/assets/DOWN.png'
                        alt='down'
                      />
                    </div>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {match.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome style={{ marginBottom: '30px' }}>
                            <div>
                              <H2 font={'20px'}>{item.text}</H2>
                            </div>
                            {/* <InputBox>hello</InputBox> */}
                          </MainHome>
                        </div>
                        <div>
                          <Image
                            width={'62px'}
                            height={'62px'}
                            src={'/assets/arrow.png'}
                            alt='arrow'
                          />
                        </div>
                      </MainHome>
                      <Spacer />
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {event && (
            <Box width={'60%'} title='pick the event'>
              <BoxHomeWrapper>
                <BoxHome>
                  <InputBox padding={'6px 35px'} width='10%'>
                    <H1>1</H1>
                  </InputBox>
                  <InputBox padding={'6px 35px'} width='10%'>
                    <H1>2</H1>
                  </InputBox>
                  <InputBox padding={'6px 35px'} width='10%'>
                    <H1>3</H1>
                  </InputBox>
                  <InputBox padding={'6px 35px'} width='10%'>
                    <H1>4</H1>
                  </InputBox>
                  <InputBox padding={'6px 35px'} width='10%'>
                    <H1>5</H1>
                  </InputBox>
                  <InputBox padding={'6px 35px'} width='10%'>
                    <H1>6</H1>
                  </InputBox>
                </BoxHome>
                <Spacer />
                <HorizontalBar />
                {match.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome style={{ marginBottom: '30px' }}>
                            <div>
                              <H1>{item.text}</H1>
                            </div>
                            {/* <InputBox>hello</InputBox> */}
                          </MainHome>
                        </div>
                        <div>
                          <Image
                            width={'62px'}
                            height={'62px'}
                            src={'/assets/arrow.png'}
                            alt='arrow'
                          />
                        </div>
                      </MainHome>
                      <Spacer />
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}
          {frame && (
            <Box width={'60%'} title='Pick the Player/Team'>
              <BoxHomeWrapper>
                {/* <BoxHome>
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
                <HorizontalBar  /> */}
                {match.map((item, index) => {
                  return (
                    <>
                      <Spacer />
                      <MainHome>
                        <div>
                          <MainHome style={{ marginBottom: '30px' }}>
                            <div>
                              <H1>{item.text}</H1>
                            </div>
                            {/* <InputBox>hello</InputBox> */}
                          </MainHome>
                        </div>
                        <div>
                          <Image
                            width={'62px'}
                            height={'62px'}
                            src={'/assets/arrow.png'}
                            alt='arrow'
                          />
                        </div>
                      </MainHome>
                      <Spacer />
                      <HorizontalBar />
                    </>
                  );
                })}
              </BoxHomeWrapper>
            </Box>
          )}

          <Box width={'20%'} height={'100%'} title='hello'>
            hello{' '}
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
