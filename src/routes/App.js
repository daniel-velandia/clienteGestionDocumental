import '../assets/css/App.css';
import '../scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { CSpinner } from '@coreui/react';

const DefaultLayout = lazy(() => import('../layouts/DefaultLayout'));

const loading = (
  <CSpinner className='my-spinner' color="danger"></CSpinner>
  
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='*' name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
