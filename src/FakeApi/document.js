import { DocumentDb } from "../models/Document";

let documents = [];

function createDocument(document) {
  const documentId = Math.floor(Math.random() * 1000000) + 1;
  const dateCreated = getCurrentDate();
  const size = document.file.size;
  const documentDb = new DocumentDb(
    documentId, 
    document.file,
    document.name,
    document.registrationNumber,
    document.typeRegistration,
    document.typeDocument,
    dateCreated,
    size,
    document.subject,
    document.annexes,
    document.requiresResponse,
    document.studentSender,
    document.companySender,
    document.addressee,
    document.responseDocument);
  documents.push(documentDb);
}

function getCurrentDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
}

function readDocuments() {
  return documents;
}

function findDocumentById(documentId) {
  return documents.find(document => document.documentId === documentId);
}

function updateDocumentById(documentId, document) {
  const documentDb = findDocumentById(documentId);
  if (documentDb) {
    Object.assign(documentDb, document);
  }
}

function deleteDocumentById(documentId) {
  documents = documents.filter(document => document.documentId !== documentId);
}

export { createDocument, readDocuments, findDocumentById, updateDocumentById, deleteDocumentById };
