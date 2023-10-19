import { useState } from "react";
import { CButton, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CRow, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { isEmptyObject } from "../connections/helpers/isEmptyObject";

function SigninForm({errors, callback}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [validated, setValidated] = useState(false)

    const validateForm = e => {

        if (!isEmptyObject(errors)) {
            e.preventDefault()
            e.stopPropagation()

            setValidated(false)
        }

    }

    const send = e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }

        callback({user});

        validateForm(e);
    }

    return (
        <CForm
            onSubmit={send}
            noValidate
            validated={validated}
        >
            <h1>Login</h1>
            <p className="text-medium-emphasis">Iniciar sesión en su cuenta</p>
            <CInputGroup className="mb-3">
                <CInputGroupText className="border-0">
                    <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput 
                    id="username"
                    placeholder="Username" 
                    autoComplete="username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    feedbackInvalid={errors.username}
                    invalid={errors.isUsernameInvalid}
                    />
            </CInputGroup>
            <CInputGroup className="mb-4">
                <CInputGroupText className="border-0">
                    <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    feedbackInvalid={errors.password}
                    invalid={errors.isPasswordInvalid}
                />
            </CInputGroup>
            <CRow>
                <CCol xs={12}>
                    <CButton 
                        type="submit" 
                        color="danger" 
                        className="text-white w-100 px-4"
                    >
                        Iniciar sesión
                    </CButton>
                </CCol>
            </CRow>
      </CForm>
    );
}

export { SigninForm };