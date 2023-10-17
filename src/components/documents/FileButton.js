import { CFormInput } from "@coreui/react";

const FileButton = ({errors, setFile, setName}) => {

    const convertToByteArray = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = function() {
            const pdfBlob = new Blob([reader.result], { type: 'application/pdf' });
            resolve(pdfBlob);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
          reader.readAsArrayBuffer(file);
        });
    }

    const handleFileChange = e => {

        const file = e.target.files[0];
        
        if(file !== undefined || file !== null) {
            const name = file.name.slice(0, file.name.lastIndexOf("."));

            convertToByteArray(file)
            .then(pdfBlob => {
                setFile(pdfBlob);
                setName(name);
            })
        }

    }

    return (
        <CFormInput 
            id="file"
            type="file" 
            onChange={e => handleFileChange(e)} 
            feedbackInvalid={errors.file}
            invalid={errors.isFileInvalid}
            className="mb-3"
        />
    )
}
export { FileButton };