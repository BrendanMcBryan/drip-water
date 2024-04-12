/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Heading from './ui/Heading';
import Logo from './ui/Logo';
import Row from './ui/Row';
import Dashboard from './pages/Dashboard';
import Household from './pages/Household';
import Login from './pages/Login';
import Readings from './pages/Readings';
import Settings from './pages/Settings';
import Users from './pages/Users';

import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';

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
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="household" element={<Household />} />
            <Route path="readings" element={<Readings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
    // <>
    //   <GlobalStyles />
    //   <Main>
    //     <Row type="vertical">
    //       <div>
    //         <Logo />
    //         <Heading as="h1">dripWater</Heading>
    //       </div>
    //       <Heading as="h2">
    //         gathering data <Span>some</Span> drips at a time
    //       </Heading>
    //     </Row>
    //   </Main>
    // </>
  );
}

export default App;
