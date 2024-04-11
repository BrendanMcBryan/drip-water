import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Heading from './ui/Heading';
import Logo from './ui/Logo';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Span = styled.span`
  color: var(--color-blue-700);
  font-style: italic;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Logo />
        <Heading as="h1">dripWater</Heading>
        <Heading as="h2">
          gathering data <Span>some</Span> drips at a time
        </Heading>
        <Heading as="h3">heading 3</Heading>
        <Heading as="h4">realy hdeaing 4</Heading>
        <Heading as="h5">no 5 just yet</Heading>
      </Main>
    </>
  );
}

export default App;
