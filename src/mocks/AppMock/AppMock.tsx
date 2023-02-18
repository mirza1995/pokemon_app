import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { IntlProvider } from 'react-intl';
import English from 'lang/en.json';
import store from 'store/store';

//Mocks application to be used in tests
export const AppMock = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <IntlProvider locale={navigator.language} messages={English}>
          {children}
        </IntlProvider>
      </CookiesProvider>
    </Provider>
  );
};
