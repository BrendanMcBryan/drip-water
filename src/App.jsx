/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import GlobalStyles from './styles/GlobalStyles';

import Dashboard from './pages/Dashboard';
import Household from './pages/Household';
import Login from './pages/Login';
import Readings from './pages/Readings';
import Settings from './pages/Settings';
import Users from './pages/Users';

import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';
// import { useCurrentUser } from './features/user/useCurrentUser';
import Profile from './pages/Profile';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
  // const { isPendingUser, user, error } = useCurrentUser();
  // console.log(user);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="household" element={<Household />} />
            <Route path="readings" element={<Readings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Toaster
          position="top-center"
          gutter={18}
          reverseOrder={false}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-blue-100)',
              color: 'var(--color-grey-700)',
              border: '1px solid white',
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
