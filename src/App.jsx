/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Heading from './ui/Heading';
import Logo from './ui/Logo';
import Row from './ui/Row';

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
        <Row type="vertical">
          <div>
            <Logo />
            <Heading as="h1">dripWater</Heading>
          </div>
          <Heading as="h2">
            gathering data <Span>some</Span> drips at a time
          </Heading>
        </Row>
      </Main>
    </>
  );
}

export default App;
