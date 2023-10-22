import { useEffect, useState } from "react";
import { readCompanies } from "../../connections/FakeApi/company";
import { readStudents } from "../../connections/FakeApi/student";
import { CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBuilding, cilUser } from "@coreui/icons";

const SenderSelect = ({errors, senderType, senderSelected, setSenderSelected}) => {

    const [senders, setSenders] = useState([]);
    const [sender, setSender] = useState(senderSelected);

    const fetchStudentsSenders = async () => {
        const students = await readStudents();

        return students.map(student => (
            { 
                label: `${student.identification} ${student.name} ${student.lastName}`, 
                value: student.studentId
            }
        ));
    }

    const fetchCompaniesSenders = async () => {
        const companies = await readCompanies();

        return companies.map(company => (
            { 
                label: `${company.nit} ${company.companyName}`, 
                value: company.companyId
            }
        ));
    }

    const fetchSelectArray = async () => {

        const initialSelectArray = [
            { label: 'Seleccione un remitente', value: '' }
        ];

        var sendersArray = [];

        switch (senderType) {
            case "student":
                sendersArray = await fetchStudentsSenders();
                break;
            case "company":
                sendersArray = await fetchCompaniesSenders();
                break;
            default:
                sendersArray = [];
                break;
        }

        return initialSelectArray.concat(sendersArray);
    }

    useEffect(() => {
        const fetchSenders = async () => {
            const sendersObtained = await fetchSelectArray();
            setSenders(sendersObtained)
        }

        fetchSenders();
    }, [senderType]);

    const handleSender = (e) => {
        setSender(e.target.value);
        setSenderSelected(e.target.value);
    }

    return (
        <CInputGroup className="mb-4">
            <CInputGroupText className="border-0">
                <CIcon icon={senderType == "company" ? cilBuilding : cilUser} />
            </CInputGroupText>
                <CFormSelect 
                    id="senders"
                    feedbackInvalid={errors.sender}
                    invalid={errors.isSenderInvalid}
                    aria-label="remitente"
                    options={senders}
                    value={sender}
                    onChange={e => handleSender(e)}
                />
        </CInputGroup>
    );
}

export { SenderSelect };