import './App.css';
import styled from 'styled-components';
import Theme from './Components/Theme';
import { GlobalStyle } from './Components/GlobalStyle';
import Logo from './Components/Logo';
import Image from './Components/Image';
import Content from './Components/Content';

const Container = styled.div`
max-width: min(100%, 375px);
margin: auto;
`;

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Logo />
        <Image />
        <Content />
      </Container>
    </Theme>
  );
}

export default App;
