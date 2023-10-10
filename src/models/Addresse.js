class Addresse {
    constructor(identification, name, lastName, email, phone, charge, area) {
      this.identification = identification;
      this.name = name;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.charge = charge;
      this.area = area;
    }
}
  
class AddresseDb {
    constructor(addresseId, identification, name, lastName, email, phone, charge, area) {
      this.addresseId = addresseId;
      this.identification = identification;
      this.name = name;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.charge = charge;
      this.area = area;
    }
}

export { Addresse, AddresseDb };