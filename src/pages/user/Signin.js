import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CRow, } from '@coreui/react'
import { SigninForm } from '../../components/user/SigninForm'
import { useState } from 'react'
import validator from 'validator'
import { isEmptyObject } from '../../connections/helpers/isEmptyObject'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { userReducer } from '../../states/userReducers'

const Signin = () => {

  const [errors, setErrors] = useState({});
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userAcount = useSelector(state => state.acount.user)

  const signin = async ({user}) => {

    const error = {};

    if(validator.isEmpty(user.username)) {
        error.username = "El nombre de usuario no puede estar vacio";
        error.isUsernameInvalid = true;
    }

    if(validator.isEmpty(user.password)) {
        error.password = "La contraseña no puede estar vacia";
        error.isPasswordInvalid = true;
    }

    if(!isEmptyObject(error)) {
      setErrors(error);
    } else {
        
        if(!isEmptyObject(userAcount)) {

          if(userAcount.username === user.username && userAcount.password === user.password) {

            dispatch(userReducer({
              connected: true,
              user: {
                username: userAcount.username,
                email: userAcount.email,
                password: userAcount.password
              }
            }))

            navigation("/");

          } else {

            toast.error("Error al iniciar sesión, por favor ingrese las credenciales correctas", {
              position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000
            });
          }
        } else {

          toast.error("No hay usuarios registrados", {
            position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000
          });
        }
    }

  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4 border-0 shadow-sm">
                <CCardBody>
                  <SigninForm
                    errors={errors}
                    callback={signin}
                  />
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-danger py-5 border-0 shadow-sm">
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrate</h2>
                    <p>
                        ¿Nuevo aquí? Regístrate ahora para empezar.
                    </p>
                    <Link to="/signup">
                      <CButton color="danger" className="text-white mt-3" active tabIndex={-1}>
                        Registrate ahora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Signin
