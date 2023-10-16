import { lazy } from 'react'

const DocumentsList = lazy(()=> import('../pages/documents/DocumentsList'))
const CreateDocument = lazy(()=> import('../pages/documents/CreateDocument'))
const DetailDocument = lazy(()=> import('../pages/documents/DetailDocument'))
const EditDocument = lazy(()=> import('../pages/documents/EditDocument'))

const StudentsList = lazy(()=> import('../pages/students/StudentsList'))
const CreateStudent = lazy(()=> import('../pages/students/CreateStudent'))
const DetailStudent = lazy(()=> import('../pages/students/DetailStudent'))
const EditStudent = lazy(()=> import('../pages/students/EditStudent'))

const AddresseersList = lazy(()=> import('../pages/addresseers/AddresseersList'))
const CreateAddresseer = lazy(()=> import('../pages/addresseers/CreateAddresseer'))
const DetailAddresseer = lazy(()=> import('../pages/addresseers/DetailAddresseer'))
const EditAddreesser = lazy(()=> import('../pages/addresseers/EditAddreesser'))

const CompaniessList = lazy(()=> import('../pages/companies/CompaniesList'))
const CreateCompany = lazy(()=> import('../pages/companies/CreateCompany'))
const DetailCompany = lazy(()=> import('../pages/companies/DetailCompany'))
const EditCompany = lazy(()=> import('../pages/companies/EditCompany'))

const routes = [
  { path: '/', exact: true, name: 'Home'},

  { path: '/documents', name: 'DocumentsList', element: DocumentsList },
  { path: '/documents/create', name: 'CreateDocument', element: CreateDocument },
  { path: '/documents/detail', name: 'DetailDocument', element: DetailDocument },
  { path: '/documents/edit', name: 'EditDocument', element: EditDocument },

  { path: '/students', name: 'StudentsList', element: StudentsList },
  { path: '/students/create', name: 'CreateStudent', element: CreateStudent },
  { path: '/students/detail', name: 'DetailStudent', element: DetailStudent },
  { path: '/students/edit', name: 'EditStudent', element: EditStudent },

  { path: '/addresseers', name: 'AddresseersList', element: AddresseersList },
  { path: '/addresseers/create', name: 'CreateAddresseer', element: CreateAddresseer },
  { path: '/addresseers/detail', name: 'DetailAddresseer', element: DetailAddresseer },
  { path: '/addresseers/edit', name: 'EditAddreesser', element: EditAddreesser },

  { path: '/companies', name: 'CompaniessList', element: CompaniessList },
  { path: '/companies/create', name: 'CreateCompany', element: CreateCompany },
  { path: '/companies/detail', name: 'DetailCompany', element: DetailCompany },
  { path: '/companies/edit', name: 'EditCompany', element: EditCompany },
]

export default routes
