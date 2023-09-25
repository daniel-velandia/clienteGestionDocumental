import { Form } from "react-bootstrap";

function GetFileButton({errors, fileCallback, nameCallback}) {

    const convertToByteArray = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = function() {
            const arrayBuffer = reader.result;
            const bytes = new Uint8Array(arrayBuffer);
            resolve(bytes);
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
        .then(bytes => {
            fileCallback(Array.from(bytes));
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