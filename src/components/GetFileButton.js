import { Form } from "react-bootstrap";

function GetFileButton({errors, fileCallback, nameCallback}) {

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

    const handleFileChange = (e) => {

        const file = e.target.files[0];

        convertToByteArray(file)
        .then(pdfBlob => {
            fileCallback(pdfBlob);
            nameCallback(file.name)
        })

    }

    return (
        <Form.Group className='mb-4' controlId='file'>
            <Form.Control 
                type='file' 
                onChange={handleFileChange} 
                isInvalid={errors.file}
                size="lg"/>

            <Form.Control.Feedback type='invalid'>
                {errors.file}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export { GetFileButton };