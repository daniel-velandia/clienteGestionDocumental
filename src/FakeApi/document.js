const documents = [];

function CreateDocumentApi({
  file,
  name,
  registrationNumber,
  typeRegistration,
  typeDocument,
  subject,
  annexes,
  requiresResponse,
  studentSender,
  companySender,
  addressee,
  responseDocument
}) {
  const documentId = Math.floor(Math.random() * 1000000);
  const dateCreated = new Date(); 
  const size = file.length; 

  documents.push({
    documentId,
    file,
    name,
    registrationNumber,
    typeRegistration,
    typeDocument,
    dateCreated,
    subject,
    annexes,
    requiresResponse,
    studentSender,
    companySender,
    addressee,
    responseDocument,
    size
  });
}


function GetDocument({documentId}) {
  return documents.find((document) => document.documentId === documentId);
}

function UpdateDocument({
  documentId,
    file,
    name,
    registrationNumber,
    typeRegistration,
    typeDocument,
    dateCreated,
    subject,
    annexes,
    requiresResponse,
    studentSender,
    companySender,
    addressee,
    responseDocument,
    size
}) {
  const index = documents.findIndex((document) => document.documentId === documentId);

  if (index !== -1) {
    documents[index] = {
      ...documents[index],
      file,
      name,
      registrationNumber,
      typeRegistration,
      typeDocument,
      dateCreated,
      subject,
      annexes,
      requiresResponse,
      studentSender,
      companySender,
      addressee,
      responseDocument,
      size
    };
  }
}

function DeleteDocument({documentId}) {
  const index = documents.findIndex((document) => document.documentId === documentId);

  if (index !== -1) {
    documents.splice(index, 1);
  }
}

function GetAllDocuments() {
  return documents;
}



export { CreateDocumentApi, GetDocument, UpdateDocument, DeleteDocument, GetAllDocuments }