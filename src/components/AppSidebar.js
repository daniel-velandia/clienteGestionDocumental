import React from 'react'
import { useSelector } from 'react-redux'
import { CImage, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import { AppSidebarNav } from './sidebar/AppSidebarNav'
import logo from '../assets/images/logo-sidebar.png';


import items from '../utils/sidebarnav'


const AppSidebar = () => {
  const sidebarShow = useSelector((state) => state.slice.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
    >
      <CSidebarBrand className="d-md-flex" to="/">
        <CImage src={logo} height={40} alt="logo" />
      </CSidebarBrand>
      <CSidebarNav>
          <AppSidebarNav items={items} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
