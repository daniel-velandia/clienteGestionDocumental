import { useState } from "react";
import { CButton, CForm, CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAt, cilLockLocked, cilUser } from '@coreui/icons'
import { isEmptyObject } from "../../connections/helpers/isEmptyObject";

const SignupForm = ({errors, callback}) => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

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
            email: email,
            password: password,
            repeatPassword: repeatPassword
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
            <h1>Registro</h1>
            <p className="text-medium-emphasis">Crea una cuenta</p>
            <CInputGroup className="mb-3">
                <CInputGroupText className="border-0 shadow-sm">
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
            <CInputGroup className="mb-3">
                <CInputGroupText className="border-0 shadow-sm">
                    <CIcon icon={cilAt} />
                </CInputGroupText>
                <CFormInput 
                    id="email"
                    placeholder="Email" 
                    autoComplete="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    feedbackInvalid={errors.email}
                    invalid={errors.isEmailInvalid}
                />
            </CInputGroup>
            <CInputGroup className="mb-3">
                <CInputGroupText className="border-0 shadow-sm">
                    <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    feedbackInvalid={errors.password}
                    invalid={errors.isPasswordInvalid}
                />
            </CInputGroup>
            <CInputGroup className="mb-4">
                <CInputGroupText className="border-0 shadow-sm">
                    <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                    id="repeatPassword"
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="new-password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                    feedbackInvalid={errors.repeatPassword}
                    invalid={errors.isRepeatPasswordInvalid}
                />
            </CInputGroup>
            <div className="d-grid">
                <CButton 
                    type="submit" 
                    color="danger" 
                    className='text-white'
                >
                    Crear cuenta
                </CButton>
            </div>
        </CForm>
    );
}

export { SignupForm };