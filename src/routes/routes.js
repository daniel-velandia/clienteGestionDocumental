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

  { path: '/documents', name: 'Documentos', element: DocumentsList },
  { path: '/documents/create', name: 'Crear', element: CreateDocument },
  { path: '/documents/detail', name: 'Detalle', element: DetailDocument },
  { path: '/documents/edit', name: 'Editar', element: EditDocument },

  { path: '/students', name: 'Estudiantes', element: StudentsList },
  { path: '/students/create', name: 'Crear', element: CreateStudent },
  { path: '/students/detail', name: 'Detalle', element: DetailStudent },
  { path: '/students/edit', name: 'Editar', element: EditStudent },

  { path: '/addresseers', name: 'Destinatarios', element: AddresseersList },
  { path: '/addresseers/create', name: 'Crear', element: CreateAddresseer },
  { path: '/addresseers/detail', name: 'Detalle', element: DetailAddresseer },
  { path: '/addresseers/edit', name: 'Editar', element: EditAddreesser },

  { path: '/companies', name: 'Compañias', element: CompaniessList },
  { path: '/companies/create', name: 'Crear', element: CreateCompany },
  { path: '/companies/detail', name: 'Detalle', element: DetailCompany },
  { path: '/companies/edit', name: 'Editar', element: EditCompany },
]

export default routes
