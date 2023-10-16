import {memo} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CBreadcrumb, CBreadcrumbItem, CButton } from '@coreui/react'
import routes from '../../routes/routes'

const AppBreadcrumb = () => {
  
  const currentLocation = useLocation().pathname

  const getRouteName = (currentPathname, routes) => {
    const currentRoute = routes.find((route) => route.path === currentPathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem>
        <CButton 
          component={NavLink} 
          to={"/"} 
          color='link' 
          className='text-black text-decoration-none p-0'
          >
            Inicio
        </CButton>
      </CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            active={breadcrumb.active && true}
            key={index}
            className='my-mt-breadcrum'
          >
            {
            !breadcrumb.active ?
              <CButton 
                component={NavLink} 
                to={breadcrumb.pathname} 
                color='link' 
                className='text-black text-decoration-none p-0 my-mt-link'
                >
                  {breadcrumb.name}
              </CButton> : 
              breadcrumb.name
            }
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default memo(AppBreadcrumb)
