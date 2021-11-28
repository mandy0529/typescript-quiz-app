import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppCart from './AppCart';
import {QueryClientProvider, QueryClient} from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AppCart />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
