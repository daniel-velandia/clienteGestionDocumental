import '../assets/css/App.css';
import '../scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { CSpinner } from '@coreui/react';
import { ToastContainer } from 'react-toastify';

const DefaultLayout = lazy(() => import('../layouts/DefaultLayout'));
const Signin = lazy(() => import('../pages/user/Signin'));
const Signup = lazy(() => import('../pages/user/Signup'));

const loading = (
  <CSpinner className='my-spinner' color="danger"></CSpinner>
  
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={loading}>
          <Routes>
            <Route path='/signin' name="Signin" element={<Signin />} />
            <Route path='/signup' name="Signup" element={<Signup />} />
            <Route path='*' name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
