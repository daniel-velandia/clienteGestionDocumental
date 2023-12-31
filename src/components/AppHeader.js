import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './header/index'
import { AppHeaderDropdown } from './header/index'
import logo from '../assets/images/logo.png'
import { sidebarShowReducer } from '../states/sliceReducers'
import { SearchDocumentsForm } from './documents/SearchDocumentsForm'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.slice.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4 border-0 shadow-sm">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1 d-md-none"
          onClick={() => dispatch(sidebarShowReducer({ sidebarShow: !sidebarShow }))}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto mx-md-0">
          <CImage src={logo} height={40} alt="logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex ms-1 me-auto">
          <CNavItem>
            <CNavLink component={NavLink} to="/documents">
              Documentos
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink component={NavLink} to="/students"
            >
              Estudiantes
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink component={NavLink} to="/companies"
            >
              Compañias
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink component={NavLink} to="/addresseers"
            >
              Destinatarios
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <SearchDocumentsForm />
        </CHeaderNav>
        <CHeaderNav className="ms-sm-3">
        <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
