import React from 'react';
// import { AppRouter } from './router/AppRouter';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Home  } from './pages/Home';
import { HomePage  } from './pages/HomePage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <HomePage/>
    </QueryClientProvider>
    </>
  )
}

export default App
