import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store';

// Registers the Mantine-matched dark theme for react-data-table-component.
// Must run once before any DataTable mounts (module-level side effect).
import './utils/dataTableTheme';

import { ApolloProvider } from '@apollo/client';
import client from './client/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>,
);
