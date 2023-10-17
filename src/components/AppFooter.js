import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <span className="me-1">&copy; 2023</span>
      <div>
        <a href="https://www.fesc.edu.co/portal/" target="_blank" rel="noopener noreferrer">
          FESC
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
