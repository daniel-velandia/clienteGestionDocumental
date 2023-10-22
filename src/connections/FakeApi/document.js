
var documents = [];

async function createDocument(document) {
  
  const documentId = Math.floor(Math.random() * 1000000) + 1;
  const dateCreated = new Date();
  const size = document.file.size;

  document.documentId = documentId.toString();
  document.dateCreated = dateCreated;
  document.size = size;

  documents.push(document);
}

async function readDocuments() {
  return documents;
}

async function findDocumentById(documentId) {
  return documents.find(document => document.documentId === documentId);
}

async function updateDocumentById(documentId, document) {
  const currentDocument = await findDocumentById(documentId);
  currentDocument.size = document.file.size;
  if (currentDocument) {
    Object.assign(currentDocument, document);
  }
}

async function deleteDocumentById(documentId) {
  documents = documents.filter(document => document.documentId !== documentId);
}

export { createDocument, readDocuments, findDocumentById, updateDocumentById, deleteDocumentById };
