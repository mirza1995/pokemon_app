import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Page from './pages/Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Page>
        <MainPage />
      </Page>
    )
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
