
var documents = [];

function createDocument(document) {
  
  const documentId = Math.floor(Math.random() * 1000000) + 1;
  const dateCreated = new Date();
  const size = document.file.size;

  document.documentId = documentId;
  document.dateCreated = dateCreated;
  document.size = size;

  documents.push(document);
}

function readDocuments() {
  return documents;
}

function findDocumentById(documentId) {
  return documents.find(document => document.documentId === documentId);
}

function updateDocumentById(documentId, document) {
  const currentDocument = findDocumentById(documentId);
  currentDocument.size = document.file.size;
  if (currentDocument) {
    Object.assign(currentDocument, document);
  }
}

function deleteDocumentById(documentId) {
  documents = documents.filter(document => document.documentId !== documentId);
}

export { createDocument, readDocuments, findDocumentById, updateDocumentById, deleteDocumentById };
