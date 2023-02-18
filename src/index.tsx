import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import 'tailwindcss/tailwind.css';
import '@styles/index.css';

import App from 'App';
import English from './lang/en.json';
import store from '@store/store';
import { HelmetProvider } from 'react-helmet-async';

const locale: string = navigator.language;

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <CookiesProvider>
      <IntlProvider locale={locale} messages={English}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </IntlProvider>
    </CookiesProvider>
  </Provider>
);
