import { useState } from 'react';
import { CButton, CForm, CFormInput, CFormLabel, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import validator from 'validator';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchDocumentsForm = () => {

    const location = useLocation();
    const navigation = useNavigate();

    const [visible, setVisible] = useState(false);

    const [sender, setSender] = useState("");
    const [dateInit, setDateInit] = useState("");
    const [dateFinish, setDateFinish] = useState("");
    const [typeRegistration, setTypeRegistration] = useState("");

    function setParams(search) {
        const newSearch = new URLSearchParams(location.search);

            if(!validator.isEmpty(search.sender)) {
                newSearch.set("sender", search.sender);
            } else {
                newSearch.delete("sender");
            }
    
            if(!validator.isEmpty(search.typeRegistration)) {
                newSearch.set("typeRegistration", search.typeRegistration);
            } else {
                newSearch.delete("typeRegistration");
            }

            if(!validator.isEmpty(search.dateInit)) {
                newSearch.set("dateInit", search.dateInit);
            } else {
                newSearch.delete("dateInit");
            }

            if(!validator.isEmpty(search.dateFinish)) {
                newSearch.set("dateFinish", search.dateFinish);
            } else {
                newSearch.delete("dateFinish");
            }
    
            return newSearch;
    }

    const searchDocuments = () => {
        setVisible(false);

        const search = {
            sender: sender,
            typeRegistration: typeRegistration,
            dateInit: dateInit,
            dateFinish: dateFinish
        }

        const params = setParams(search);
        navigation(`/documents?${params.toString()}`);

        setSender("");
        setDateInit("");
        setDateFinish("");
        setTypeRegistration("");
    }

    return (
        <div>
            <CIcon 
                icon={cilSearch} 
                onClick={() => setVisible(!visible)} 
                role="button"
            />

            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">Buscar documentos</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm>
                        <CFormLabel htmlFor="search">
                            Remitente
                        </CFormLabel>
                        <CFormInput
                            type="text"
                            id="search"
                            placeholder="Remitente"
                            text="Buscar los documentos por cedula, nombre del remitente o número de radicado"
                            aria-describedby="buscar"
                            value={sender}
                            onChange={e => setSender(e.target.value)}
                        />
                        <CFormLabel htmlFor="TypeRegistration" className='mt-3'>
                            Tipo de radicado
                        </CFormLabel>
                        <CFormSelect 
                            id='TypeRegistration'
                            aria-label="Tipo de radicado"
                            options={[
                                'Seleccione un tipo',
                                { label: 'Todos los radicados', value: 'all' },
                                { label: 'Radicados de entrega', value: 'delibery' },
                                { label: 'Radicados de respuesta', value: 'reply'}
                            ]}
                            value={typeRegistration}
                            onChange={e => setTypeRegistration(e.target.value)}
                        />
                        <CFormLabel htmlFor="dateInit" className='mt-3'>
                            Fecha de inicio
                        </CFormLabel>
                        <CFormInput
                            type='date'
                            id='dateInit'
                            value={dateInit}
                            onChange={e => setDateInit(e.target.value)}
                        />
                        <CFormLabel htmlFor="dateFinish" className='mt-3'>
                            Fecha de fin
                        </CFormLabel>
                        <CFormInput
                            type='date'
                            id='dateFinish'
                            value={dateFinish}
                            onChange={e => setDateFinish(e.target.value)}
                        />
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton 
                        color="danger"
                        className='text-white' 
                        onClick={searchDocuments}
                    >
                        Buscar
                    </CButton>
                </CModalFooter>
            </CModal>
        </div>
    );
}

export { SearchDocumentsForm };