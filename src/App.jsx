import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  color: red;
  background-color: yellow;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <H1>Hello World </H1>
      </main>
    </>
  );
}

export default App;
