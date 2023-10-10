import { AddresseDb } from "../models/Addresse";

let addresses = [];

function createAddresse(addresse) {
  const addresseId = Math.floor(Math.random() * 1000000) + 1;
  const addresseDb = new AddresseDb(
    addresseId, 
    addresse.identification,
    addresse.name,
    addresse.lastName,
    addresse.email,
    addresse.phone,
    addresse.charge,
    addresse.area);
  addresses.push(addresseDb);
}

function readAddresses() {
  return addresses;
}

function findAddresseById(addresseId) {
  return addresses.find(addresse => addresse.addresseId === addresseId);
}

function updateAddresseById(addresseId, addresse) {
  const addresseDb = findAddresseById(addresseId);
  if (addresseDb) {
    Object.assign(addresseDb, addresse);
  }
}

function deleteAddresseById(addresseId) {
  addresses = addresses.filter(addresse => addresse.addresseId !== addresseId);
}

export { createAddresse, readAddresses, findAddresseById, updateAddresseById, deleteAddresseById };
