class Addresseer {
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
  
class AddresseerDb {
    constructor(addresseerId, identification, name, lastName, email, phone, charge, area) {
      this.addresseerId = addresseerId;
      this.identification = identification;
      this.name = name;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.charge = charge;
      this.area = area;
    }
}

export { Addresseer, AddresseerDb };