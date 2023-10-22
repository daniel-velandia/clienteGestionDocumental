import React from 'react'
import { CCard, CCardBody, CCol, CContainer, CRow } from '@coreui/react'
import { useState } from 'react'
import validator from 'validator'
import { isEmptyObject } from '../../connections/helpers/isEmptyObject'
import { useNavigate } from 'react-router-dom'
import { SignupForm } from '../../components/user/SignupForm'
import { useDispatch } from 'react-redux'
import { userReducer } from '../../states/userReducers'

const Signup = () => {
    
    const [errors, setErrors] = useState({});

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const signup = async ({user}) => {

        const error = {};

        if(validator.isEmpty(user.username)) {
            error.username = "El nombre de usuario no puede estar vacio";
            error.isUsernameInvalid = true;
        }

        if(validator.isEmpty(user.email)) {
            error.email = "El correo no puede estar vacio";
            error.isEmailInvalid = true;
        }

        if(validator.isEmpty(user.password)) {
            error.password = "La contraseña no puede estar vacia";
            error.isPasswordInvalid = true;
        }

        if(validator.isEmpty(user.repeatPassword)) {
            error.repeatPassword = "Debe volver a ingresar la contraseña";
            error.isRepeatPasswordInvalid = true;
        }

        if(user.password !== user.repeatPassword) {
            error.repeatPassword = "Las contraseñas deben ser iguales";
            error.isRepeatPasswordInvalid = true;
        }

        if(!isEmptyObject(error)) {
            setErrors(error);
        } else {

            dispatch(userReducer({
                connected: false,
                user: {
                    username: user.username,
                    email: user.email,
                    password: user.password
                }
            }))

            navigation("/signin");
        }
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                    <CCard className="mx-4 border-0 shadow-sm">
                        <CCardBody className="p-4">
                            <SignupForm
                                errors={errors}
                                callback={signup}
                            />
                        </CCardBody>
                    </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Signup
