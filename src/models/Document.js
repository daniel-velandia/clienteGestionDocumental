class Document {
    constructor(
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
      addresseer,
      responseDocument
    ) {
      this.file = file;
      this.name = name;
      this.registrationNumber = registrationNumber;
      this.typeRegistration = typeRegistration;
      this.typeDocument = typeDocument;
      this.subject = subject;
      this.annexes = annexes;
      this.requiresResponse = requiresResponse;
      this.studentSender = studentSender;
      this.companySender = companySender;
      this.addresseer = addresseer;
      this.responseDocument = responseDocument;
    }
}
  
class DocumentDb {
    constructor(
      documentId,
      file,
      name,
      registrationNumber,
      typeRegistration,
      typeDocument,
      dateCreated,
      size,
      subject,
      annexes,
      requiresResponse,
      studentSender,
      companySender,
      addresseer,
      responseDocument
    ) {
      this.documentId = documentId;
      this.file = file;
      this.name = name;
      this.registrationNumber = registrationNumber;
      this.typeRegistration = typeRegistration;
      this.typeDocument = typeDocument;
      this.dateCreated = dateCreated;
      this.size = size;
      this.subject = subject;
      this.annexes = annexes;
      this.requiresResponse = requiresResponse;
      this.studentSender = studentSender;
      this.companySender = companySender;
      this.addresseer = addresseer;
      this.responseDocument = responseDocument;
    }
}


export { Document, DocumentDb };