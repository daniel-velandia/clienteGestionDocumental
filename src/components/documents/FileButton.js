import { CFormInput, CFormLabel } from "@coreui/react";

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
        
        if(file != undefined || file != null) {
            const name = file.name.slice(0, file.name.lastIndexOf("."));

            convertToByteArray(file)
            .then(pdfBlob => {
                setFile(pdfBlob);
                setName(name);
            })
        }

    }

    return (
        <div className="mb-4">
            <CFormLabel 
                htmlFor="file" 
                className='mt-3'
            >
                Archivo
            </CFormLabel>
            <CFormInput 
                type="file" 
                id="file"
                onChange={e => handleFileChange(e)} 
                feedbackInvalid={errors.file}
                invalid={errors.isFileInvalid}
            />
        </div>
    )
}
export { FileButton };