import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sidebarShowReducer } from '../states/sliceReducers'

const DefaultLayout = () => {

  const connected = useSelector(state => state.acount.connected)
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!connected) {
      navigation("/signin");
    }

    window.addEventListener('resize', () => {
      const windowWidht = window.innerWidth;
      if(windowWidht > 767) {
        dispatch(sidebarShowReducer({ sidebarShow: false }))
      }
    });

  }, [navigation, connected, dispatch])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 my-bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
