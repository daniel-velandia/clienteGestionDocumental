import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Navigation } from '../layouts/Navigation';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateStudent } from '../pages/CreateStudent';
import { CreateAddresseer } from '../pages/CreateAddresseer';
import { CreateCompany } from '../pages/CreateCompany';
import { CreateDocument } from '../pages/CreateDocument';
import { SearchDocuments } from '../pages/SearchDocuments';
import { DetailDocument } from '../pages/DetailDocument';
import { DetailStudent } from '../pages/DetailStudent';
import { DetailAddresseer } from '../pages/DetailAddresseer';
import { DetailCompany } from '../pages/DetailCompany';
import { EditStudent } from '../pages/EditStudent';
import { EditAddresseer } from '../pages/EditAddreesser';
import { EditCompany } from '../pages/EditCompany';
import { EditDocument } from '../pages/EditDocument';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';
import { Error404 } from '../pages/Error404';

function App() {
  return (
    <BrowserRouter >
      <Navigation />
      <ToastContainer />
      <Routes>
      <Route path='/' element={<SearchDocuments />} />
        <Route path='/createstudent' element={<CreateStudent />} />
        <Route path='/createaddresseer' element={<CreateAddresseer />} />
        <Route path='/createcompany' element={<CreateCompany />} />
        <Route path='/createdocument' element={<CreateDocument />} />
        <Route path='/student/:id' element={<DetailStudent />} />
        <Route path='/addresseer/:id' element={<DetailAddresseer />} />
        <Route path='/company/:id' element={<DetailCompany />} />
        <Route path='/document/:id' element={<DetailDocument />} />
        <Route path='/editstudent/:id' element={<EditStudent />} />
        <Route path='/editaddresseer/:id' element={<EditAddresseer />} />
        <Route path='/editcompany/:id' element={<EditCompany />} />
        <Route path='/editdocument/:id' element={<EditDocument />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
