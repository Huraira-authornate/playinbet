import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from '../components/Layout';
import { MainHome, Wrapper } from '../components/Styles';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { Sidebar } from '../components/Sidebar';
import Spacer from '../components/Spacer';
import { Box } from '../components/Box';
import { InputBox } from '../components/InputBox';
import { H1 } from '../components/TypoGraphy';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Spacer />
        <MainHome>
          <Sidebar />
          {/* <Box title='hello'>hello </Box> */}
          <InputBox width='60%'>
            <H1>Heloo</H1>
            <H1>Heloo</H1>
          </InputBox>
          <InputBox>
            <H1>Heloo</H1>
            <H1>Heloo</H1>
          </InputBox>
        </MainHome>
      </Container>
    </Wrapper>
  );
}
