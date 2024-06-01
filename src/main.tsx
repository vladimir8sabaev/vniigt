import ReactDOM from 'react-dom/client';
import App from './app/App';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import './index.scss';
import store from './app/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
