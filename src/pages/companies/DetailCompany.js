import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { findCompanyById } from "../../connections/FakeApi/company";
import { DeleteCompanyButton } from "../../components/companies/DeleteCompanyButton";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

const DetailCompany = () => {
  const [company, setCompany] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    setCompany(findCompanyById(parseInt(query)));
  }, [query, location]);

  return (
    <CRow className="justify-content-center mb-4">
      <CCol xs={12} sm={4}>
        {company && 
          <CCard>
            <CCardHeader className="bg-danger text-white">
              <CRow className="align-items-center">
                <CCol xs={12} lg={7}>
                  <h5 className="mb-0">{company.companyName}</h5>
                </CCol>
                <CCol xs={12} sm={5} className="d-flex justify-content-sm-end mt-3 mt-sm-0">
                  <CButton
                    component={NavLink}
                    to={`/companies/edit?q=${company.companyId}`}
                    color="linck"
                  >
                    <CIcon icon={cilPencil} size="xl" className="text-white" />
                  </CButton>
                  <DeleteCompanyButton company={company} />
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CListGroup flush>
                <CListGroupItem>
                  <strong>NIT:</strong> {company.nit}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Correo:</strong> {company.email}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Teléfono:</strong> {company.phone}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Remitente:</strong> {company.senderName}
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        }
      </CCol>
    </CRow>
  );
};

export default DetailCompany;