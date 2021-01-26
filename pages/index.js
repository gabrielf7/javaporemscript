import Head from 'next/head';
import styled from 'styled-components';
import MyHead from '../src/components/MyHead';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return(
    <>
      <Head>
        <MyHead />
      </Head>
      <QuizBackground style= {{ backgroundImage: `url(${db.bg})`}} >
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Olá Jsteiros</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Esse conteudo se dedica ao JS</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Olá visitante</h1>
              <p>Esse conteudo se dedica ao JS</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gabrielf7" />
      </QuizBackground>
    </>
  );
}
