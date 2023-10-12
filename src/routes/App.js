import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from '../layouts/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateStudent } from '../pages/CreateStudent';
import { CreateAddresseer } from '../pages/CreateAddresseer';
import { CreateCompany } from '../pages/CreateCompany';
import { CreateDocument } from '../pages/CreateDocument';
import { SearchDocuments } from '../pages/SearchDocuments';
import { DetailDocument } from '../pages/DetailDocument';
import { DetailStudent } from '../pages/DetailStudent';

function App() {
  return (
    <BrowserRouter >
      <Navigation />
      <Routes>
      <Route path='/' element={<SearchDocuments />} />
        <Route path='/createstudent' element={<CreateStudent />} />
        <Route path='/createaddresseer' element={<CreateAddresseer />} />
        <Route path='/createcompany' element={<CreateCompany />} />
        <Route path='/createdocument' element={<CreateDocument />} />
        <Route path='/student/:id' element={<DetailStudent />} />
        <Route path='/document/:id' element={<DetailDocument />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
