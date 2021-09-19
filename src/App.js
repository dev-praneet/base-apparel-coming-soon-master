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

@media (min-width: ${props => props.theme.breakpoint.mobile}) {
  max-width: min(100%, 1300px);
  margin: 5em auto 0 auto;
  display: grid;
  grid-template-rows: 1fr 5fr;
  // grid-template-columns: auto auto;
  grid-template-areas: 
  "first second" 
  "third second";
}
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