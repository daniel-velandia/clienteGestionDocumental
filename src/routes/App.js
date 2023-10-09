import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from '../layouts/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateStudent } from '../pages/CreateStudent';
import { CreateAddressee } from '../pages/CreateAddressee';
import { CreateCompany } from '../pages/CreateCompany';
import { CreateDocument } from '../pages/CreateDocument';
import { SearchDocuments } from '../pages/SearchDocuments';

function App() {
  return (
    <BrowserRouter >
      <Navigation />
      <Routes>
      <Route path='/' element={<SearchDocuments />} />
        <Route path='/createstudent' element={<CreateStudent />} />
        <Route path='/createaddressee' element={<CreateAddressee />} />
        <Route path='/createcompany' element={<CreateCompany />} />
        <Route path='/createdocument' element={<CreateDocument />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
