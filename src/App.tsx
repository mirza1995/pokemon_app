import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
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
