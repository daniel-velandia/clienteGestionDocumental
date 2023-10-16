import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilBook,
  cilBriefcase,
  cilAddressBook
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavTitle,
    name: 'Entidades',
  },
  {
    component: CNavItem,
    name: 'Documentos',
    to: '/documents',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Estudiantes',
    to: '/students',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Compañias',
    to: '/companies',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Destinatarios',
    to: '/addresseers',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />
  }
]

export default sidebarnav
