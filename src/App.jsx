import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/App.routes';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
