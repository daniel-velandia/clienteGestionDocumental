class Company {
    constructor(companyName, nit, email, phone, senderName) {
        this.companyName = companyName;
        this.nit = nit;
        this.email = email;
        this.phone = phone;
        this.senderName = senderName;
    }
}

class CompanyDb {
    constructor(companyId, companyName, nit, email, phone, senderName) {
        this.companyId = companyId;
        this.companyName = companyName;
        this.nit = nit;
        this.email = email;
        this.phone = phone;
        this.senderName = senderName;
    }
}

export { Company, CompanyDb };